var Alexa = require('alexa-app')
var LaunchIntent = require('./intents/launch-intent.js')
// var AlphabetIntent = require('./intents/alphabet-intent.js')
// var HelpIntent = require('./intents/help-intent.js')
// var StopIntent = require('./intents/stop-intent.js')
// var CancelIntent = require('./intents/cancel-intent.js')

var app = new Alexa.app('alphabet-teacher')

LaunchIntent(app, function(request, response) {
  response.say('Hello World').send()
  return
})

 module.exports = app
