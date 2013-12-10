var chai = require('chai')
chai.should()
var Promise = require('bluebird')

describe('ncall', function () {
  var ncall = require('../')

  it('calls a function that takes a node-style callback', function (done) {

    var bar = function (arg, cb) {
      cb(null, !arg)
    }

    ncall(bar, false)
      .then(function (val) {
        val.should.equal(true)
      })
      .then(done, done)


  })

  it('rejects the promise if there is an cb error', function (done) {

    var error = function (cb) {
      cb(new Error('fubar'))
    }

    ncall(error)
      .then(function () {
        throw new Error('should not resolve')
      })
      .catch(function (err) {
        err.should.match(/fubar/)
      })
      .then(done, done)

  })
})