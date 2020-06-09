// import external modules
const express = require('express')

// local imports
const { createUser } = require('../db/users')
const token = require('../auth/token')

// define router
const router = express.Router()

// define routes
router.post('/register', register, token.issue)

// supporting functions to routs
function register (req,res, next) {
  const { username, password } = req.body
  createUser({username, password})
    .then(([id]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      // todo research how this works in Postgres
      if(message.includes('UNIQUE constraint failed: users.username')){
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: "Something bad happend. We don't know why."
      })
    })
}

// export router
module.exports = router