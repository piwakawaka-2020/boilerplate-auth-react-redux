// import external modules
const express = require('express')

// define router
const router = express.Router()

// define routes
router.post('/register', register)

// supporting functions to routs
function register (req,res) {
  const { username, password } = req.body
}

// export router
module.exports = router