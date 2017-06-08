var Alexa = require('alexa-app')

// var AlphabetIntent = require('./intents/alphabet-intent.js')
// var HelpIntent = require('./intents/help-intent.js')
// var StopIntent = require('./intents/stop-intent.js')
// var CancelIntent = require('./intents/cancel-intent.js')

var app = new Alexa.app('alphabet-teacher')

app.launch(function(request, response) {
  var launchOutput = ' Welcome to Alphabet Teacher.  You can have Alexa say the English alphabet back to you.  To start using the skill, say Alexa, ask alphabet teacher to say the alphabet.'
  response.say(launchOutput)
  response.shouldEndSession(false)
  return
})

app.intent('AMAZON.HelpIntent',{
  'slots': {},
  'utterances': []
}, function (request, response) {
  var helpOutput = 'Welcome to Alphabet Teacher.  The purpose of this skill is to practice the alphabet along with alexa. To Have Alexa say the alphabet please say Alexa, ask alphabet to say the alphabet. What would you like to do?'
  response.say(helpOutput)
  response.shouldEndSession(false)
  return
})

app.intent('AMAZON.StopIntent',{
  'slots': {},
  'utterances': []
}, function (request, response) {
  var stopOutput = 'Stopping your Request and Exiting Skill'
  response.say(stopOutput).send()
  return
})

app.intent('AMAZON.CancelIntent',{
  'slots': {},
  'utterances': []
}, function (request, response) {
  var cancelOutput = 'Canceling your Request and Exiting Skill'
  response.say(cancelOutput).send()
  return
})

module.exports = app
