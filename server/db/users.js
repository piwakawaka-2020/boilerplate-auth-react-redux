// local imports
const connection = require('./connection')
const { generateHash } = require('../auth/hash')

// users table db functions

// creates a new user entry upon registeration
function createUser ({username, password }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').insert({username, hash }))
}

// verifies a users credentails upon sing in
function verifyUser ({username, password }, db = connection) {
  return generateHash(password)
    .then(hash => db('users').where({username: username, hash: hash}).select('id').first())
}

// get a users profile
function getUserById (id,db =connection) {
  return db('users').where('id', id).select('username').first()
}

// export functions
module.exports = {
  createUser,
  verifyUser,
  getUserById
}