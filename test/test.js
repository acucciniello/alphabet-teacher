var bst = require('bespoken-tools')
var chai = require('chai')
var server = null
var alexa = null

beforeEach(function (done) {
  // first param - the location of lambda file to be return
  // second - port
  // third - verbose mode res/req sent to console
  server = new bst.LambdaServer('../index.js', 10000, true)
  // 1st - url of server
  // 2 - IntentSchema
  // utterances
  alexa = new bst.BSTAlexa('http://localhost:10000',
                './speechAssets/IntentSchema.json',
                './speechAssets/Utterances.txt')
  server.start( function() {
    alexa.start(function (error) {
      if (error !== undefined) {
        console.log('Error: ' + error)
      } else {
        done()
      }
    })
  })
})

afterEach(function (done) {
  alexa.stop(function () {
    server.stop(function () {
      done()
    })
  })
})

it('Launches the skill', function (done) {
  // Launch the skill via launch request
  alexa.launched(function (error, payload) {
    if(error) {
      console.log(error)
    }
    chai.assert.equal(payload.response.outputSpeech.ssml, '<speak>Hello World</speak>')
    done()
  })
})