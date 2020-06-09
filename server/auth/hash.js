// import external modules
const sodium = require('libsodium-wrappers')

// define module function
function generateHash (password) {
  return sodium.ready.then(() => 
    sodium.crypto_pwhash_str(
      password,
      sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
      sodium.crypto_pwhash_MEMLIMIT_MIN
    )
  )
}

// export hash module
module.exports = {
  generateHash
}