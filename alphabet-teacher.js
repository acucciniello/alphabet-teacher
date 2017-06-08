var Alexa = require('alexa-app')

// var AlphabetIntent = require('./intents/alphabet-intent.js')
// var HelpIntent = require('./intents/help-intent.js')
// var StopIntent = require('./intents/stop-intent.js')
// var CancelIntent = require('./intents/cancel-intent.js')

var app = new Alexa.app('alphabet-teacher')
app.launch(function(request, response) {
  response.say('Hello World').send()
  return
})

app.intent('AMAZON.HelpIntent',{
  'slots': {},
  'utterances': []
}, function (request, response) {
  var helpOutput = 'Welcome to Alphabet Teacher.  The purpose of this skill is to practice the alphabet along with alexa. To Have Alexa say the alphabet please say Alexa, ask alphabet to say the Alphabet. What would you like to do?'
  response.say(helpOutput).send()
})

module.exports = app
