const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    requestTimeout: 50000,
    defaultCommandTimeout: 30000
    //setupNodeEvents(on, config) {
    // require('@cypress/grep/src/plugin')(config)
    // return config
  },
  projectId: 'xwrai9',
})



