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
  var helpOutput = 'Welcome to Alphabet Teacher.  The purpose of this skill is to practice the alphabet along with alexa. To Have Alexa say the alphabet please say Alexa, ask alphabet teacher to say the alphabet. What would you like to do?'
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

app.intent('AlphabetIntent', {
  'slots': {},
  'utterances': ['to say the alphabet', 'to tell me the alphabet', 'to recite the alphabet']
}, function (request, response) {
  var alphabet = 'A <break time="2s"/>, B <break time="2s"/>, C <break time="2s"/>, D <break time="2s"/>, E <break time="2s"/>, F <break time="2s"/>, G <break time="2s"/>, H <break time="2s"/>, I <break time="2s"/>, J <break time="2s"/>, K <break time="2s"/>, L <break time="2s"/>, M <break time="2s"/>, N <break time="2s"/>, O <break time="2s"/>, P <break time="2s"/>, Q <break time="2s"/>, R <break time="2s"/>, S <break time="2s"/>, T <break time="2s"/>, U <break time="2s"/>, V <break time="2s"/>, W <break time="2s"/>, X <break time="2s"/>, Y <break time="2s"/>, Z'
  response.say(alphabet).send()
})

module.exports = app
