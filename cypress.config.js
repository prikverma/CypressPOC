const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'zwm98y',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
  },
});