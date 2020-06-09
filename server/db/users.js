// local imports
const connection = require('./connection')

// users table db functions
function createUser ({username, password}, db = connection) {
  return db('users').insert({username, hash: password})
}

// export functions
module.exports = {
  createUser
}