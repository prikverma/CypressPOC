const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
module.exports = defineConfig({
  projectId: 'zwm98y',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'CypressPOC',
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
});