var Promise = require('bluebird')

function ncall (fn) {
  var args = Array.prototype.slice.call(arguments, 1)
  return new Promise(function (resolve, reject) {
    args.push(function (err, ret) {
      if (err) { return reject(err) }
      resolve(ret)
    })
    fn.apply(null, args)
  })
}

module.exports = ncall