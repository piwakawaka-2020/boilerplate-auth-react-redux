// import external modules
const express = require('express')

// local imports
const { createUser } = require('../db/users')

// define router
const router = express.Router()

// define routes
router.post('/register', register)

// supporting functions to routs
function register (req,res) {
  const { username, password } = req.body
  createUser({username, password})
    .then(([id]) => {
      res.locals.userId = id
      res.status(201).json({ok: true})
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