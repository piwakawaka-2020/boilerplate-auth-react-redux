// local imports
const connection = require('./connection')
const {generateHash} = require('../auth/hash')

// users table db functions
function createUser ({username, password}, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash}))
}

// export functions
module.exports = {
  createUser
}