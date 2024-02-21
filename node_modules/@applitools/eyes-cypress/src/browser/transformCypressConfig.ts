import type {appliConfFile} from '../expose'
import type {SpecType, Config} from '@applitools/core'
import {transformBrowsers, transformAccessibilityValidation} from './utils'
import * as utils from '@applitools/utils'

export function transformCypressConfig(config: appliConfFile): Config<SpecType, 'ufg'> {
  return {
    open: {
      apiKey: config.apiKey,
      eyesServerUrl: config.serverUrl,
      proxy: config.proxy,
      appName: config.appName,
      testName: config.testName,
      displayName: config.displayName,
      batch: {
        ...config.batch,
        id: config.batchId ?? config.batch?.id,
        name: config.batchName ?? config.batch?.name,
        sequenceName: config.batchSequenceName ?? config.batch?.sequenceName,
        notifyOnCompletion: config.notifyOnCompletion ?? config.batch?.notifyOnCompletion,
      },
      keepBatchOpen: !config.shouldDoPostSpecTasks,
      environmentName: config.envName,
      baselineBranchName: config.baselineBranchName,
      branchName: config.branchName,
      parentBranchName: config.parentBranchName,
      compareWithParentBranch: config.compareWithParentBranch,
      ignoreBaseline: config.ignoreBaseline,
      ignoreGitBranching: config.ignoreGitMergeBase,
      saveDiffs: config.saveDiffs,
      properties: config.properties,
      environment: {
        viewportSize: config.viewportSize,
      },
      isComponentTest: config.isComponentTest,
    },
    check: {
      environments: transformBrowsers(config.browser),
      matchLevel: config.matchLevel,
      ignoreCaret: config.ignoreCaret,
      ignoreDisplacements: config.ignoreDisplacements,
      accessibilitySettings: transformAccessibilityValidation(config.accessibilityValidation),
      layoutBreakpoints: config.layoutBreakpoints
        ? utils.types.has(config.layoutBreakpoints, 'breakpoints')
          ? config.layoutBreakpoints
          : {breakpoints: config.layoutBreakpoints}
        : undefined,
      sendDom: config.sendDom,
      useDom: config.useDom,
      enablePatterns: config.enablePatterns,
      ufgOptions: config.visualGridOptions,
      disableBrowserFetching: config.disableBrowserFetching,
      hooks: config.scriptHooks,
    },
    screenshot: {
      waitBeforeCapture: config.waitBeforeCapture,
    },
    close: {
      updateBaselineIfNew: config.saveNewTests,
    },
  }
}
