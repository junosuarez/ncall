# ncall
Call a Node callback style function and return a Promise

Implemented with [bluebird](https://npm.im/bluebird) for fast, Promise/A+ promises.


## usage
```js
var ncall = require('ncall')

var bar = function (arg, cb) {
  cb(null, !arg)
}

ncall(bar, false)
  .then(function (val) {
    // val == true
  })
```

## installation

    $ npm install ncall


## running the tests

From package root:

    $ npm install
    $ npm test


## thanks

kudos to [Q](https://npm.im/q), whose api I stole.


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) MMXIII jden <jason@denizac.org>. See LICENSE.md
