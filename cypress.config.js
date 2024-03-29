const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const eyesPlugin = require('@applitools/eyes-cypress')
module.exports = eyesPlugin(defineConfig(defineConfig({
  projectId: 'zwm98y',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress-POC-Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    video: true,
    screenshotOnRunFailure: true,

  },
  // retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', { downloadFile });
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    downloadsFolder: "cypress/downloads"
  },
})));


