import connectSocket, {type SocketWithUniversal} from './webSocket'
import {type CloseBatchSettings, makeCoreServer} from '@applitools/core'
import handleTestResults from './handleTestResults'
import path from 'path'
import fs from 'fs'
import {Server as HttpsServer} from 'https'
import {Server as WSServer} from 'ws'
import {type Logger} from '@applitools/logger'
import {AddressInfo} from 'net'
import {promisify} from 'util'
import {EyesPluginConfig} from './index'
import {extractEnvironment} from '../plugin/extractEnvironment'

export type StartServerReturn = {
  server: Omit<SocketWithUniversal, 'disconnect' | 'ref' | 'unref' | 'send' | 'request' | 'setPassthroughListener'>
  port: number
  closeManagers: () => Promise<any[]>
  closeBatches: (settings: CloseBatchSettings | CloseBatchSettings[]) => Promise<void>
  closeUniversalServer: () => void
}

export default function makeStartServer({logger, eyesConfig}: {logger: Logger; eyesConfig: EyesPluginConfig}) {
  return async function startServer(options?: Cypress.PluginConfigOptions): Promise<StartServerReturn> {
    const key = fs.readFileSync(path.resolve(__dirname, '../../src/pem/server.key'))
    const cert = fs.readFileSync(path.resolve(__dirname, '../../src/pem/server.cert'))
    const https = new HttpsServer({
      key,
      cert,
    })
    await promisify(https.listen.bind(https))()

    const port = (https.address() as AddressInfo).port
    const wss = new WSServer({server: https, path: '/eyes', maxPayload: 254 * 1024 * 1024})

    wss.on('close', () => {
      https.close()
      closeUniversalServer()
    })

    const environment = extractEnvironment(options)
    const {port: universalPort, close: closeUniversalServer} = await makeCoreServer({
      idleTimeout: 0,
      printStdout: true,
      singleton: false,
      portResolutionMode: 'random',
      environment,
      debug: eyesConfig.universalDebug,
    })

    const managers: {manager: object; socketWithUniversal: SocketWithUniversal}[] = []
    let socketWithUniversal: SocketWithUniversal

    wss.on('connection', socketWithClient => {
      socketWithUniversal = connectSocket(`ws://localhost:${universalPort}/eyes`)

      socketWithUniversal.setPassthroughListener((message: string) => {
        logger.log('<== ', message.toString().slice(0, 1000))
        const {name, payload} = JSON.parse(message)
        if (name === 'Core.makeManager') {
          managers.push({manager: payload.result, socketWithUniversal})
        }

        socketWithClient.send(message.toString())
      })

      socketWithClient.on('message', (message: string) => {
        const msg = JSON.parse(message)
        logger.log('==> ', message.toString().slice(0, 1000))
        if (msg.name === 'Test.printTestResults') {
          try {
            if (msg.payload.resultConfig.tapDirPath && msg.payload.resultConfig.shouldCreateTapFile) {
              handleTestResults.handleBatchResultsFile(msg.payload.testResults, {
                tapFileName: msg.payload.resultConfig.tapFileName,
                tapDirPath: msg.payload.resultConfig.tapDirPath,
              })
            }
            handleTestResults.printTestResults({
              testResults: msg.payload.testResults,
              resultConfig: msg.payload.resultConfig,
            })
            socketWithClient.send(
              JSON.stringify({
                name: 'Test.printTestResults',
                key: msg.key,
                payload: {result: 'success'},
              }),
            )
          } catch (ex) {
            socketWithClient.send(
              JSON.stringify({
                name: 'Test.printTestResults',
                key: msg.key,
                payload: {result: ex.message.toString()},
              }),
            )
          }
        } else {
          socketWithUniversal.send(message)
        }
      })
    })

    return {
      server: wss,
      port,
      closeManagers,
      closeBatches,
      closeUniversalServer,
    }

    function closeManagers() {
      return Promise.all(
        managers.map(({manager, socketWithUniversal}) =>
          socketWithUniversal.request('EyesManager.getResults', {
            manager,
            settings: {throwErr: false, removeDuplicateTests: eyesConfig.eyesRemoveDuplicateTests},
          }),
        ),
      )
    }
    function closeBatches(settings: CloseBatchSettings | CloseBatchSettings[]) {
      if (socketWithUniversal)
        return socketWithUniversal.request('Core.closeBatch', {settings}).catch((err: Error) => {
          logger.log('@@@', err)
        })
    }
  }
}
