import handleTestResults from './handleTestResults'
import {type StartServerReturn} from './server'
export type EyesCypressAction = 'before:run' | 'after:run'
import type {appliConfFile} from '../expose'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface ResolvedConfigOptions {
      appliConfFile: appliConfFile
    }
  }
}

export default function makeGlobalRunHooks({
  closeManagers,
  closeBatches,
  closeUniversalServer,
}: Omit<StartServerReturn, 'server' | 'port'>): {
  'after:run': (results: CypressCommandLine.CypressRunResult) => void | Promise<void>
  'before:run': (runDetails: Cypress.BeforeRunDetails) => void | Promise<void>
} {
  return {
    'before:run': ({config}: Cypress.BeforeRunDetails): void => {
      if (!(config as Cypress.Config).isTextTerminal) return
    },

    'after:run': async ({config}: CypressCommandLine.CypressRunResult) => {
      try {
        if (!(config as Cypress.Config).isTextTerminal) return
        const summaries = await closeManagers()

        const testResults = summaries.map(({results}) => results.map(({result}) => result)).flat()

        if (!config.appliConfFile.dontCloseBatches) {
          await closeBatches({
            batchId: config.appliConfFile.batchId || config.appliConfFile.batch.id,
            eyesServerUrl: config.appliConfFile.serverUrl,
            proxy: config.appliConfFile.proxy,
            apiKey: config.appliConfFile.apiKey,
          })
        }

        if (config.appliConfFile.tapDirPath) {
          handleTestResults.handleBatchResultsFile(testResults, {
            tapDirPath: config.appliConfFile.tapDirPath,
            tapFileName: config.appliConfFile.tapFileName,
          })
        }
        const resultConfig = {
          showLogs: config.appliConfFile.showLogs,
          shouldThrowError: config.appliConfFile.failCypressAfterAllSpecs,
        }
        if (config.appliConfFile.failCypressAfterAllSpecs) {
          // we want to throw an exception in case we have a least one test with diffs
          // we create a runner per spec file, therefore we could have multiple summeries
          for (const summary of summaries) {
            handleTestResults.printTestResults({testResults: summary.results.map(({result}) => result), resultConfig})
          }
        }
      } finally {
        await closeUniversalServer()
      }
    },
  }
}
