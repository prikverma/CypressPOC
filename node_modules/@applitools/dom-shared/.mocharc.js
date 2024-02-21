const {mochaGrep} = require('@applitools/test-utils')

const group = process.env.MOCHA_GROUP

module.exports = {
  timeout: 0,
  require: ['@swc-node/register'],
  reporter: 'mocha-multi',
  reporterOptions: [`spec=-,json=./logs/report${group ? `-${group}` : ''}.json,xunit=./logs/report.xml`],
  grep: mochaGrep(),
}
