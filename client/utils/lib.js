
// captures JWT details from local store
export function getToken () {
  const localStorage = global.window.localStorage
  const localStorageKeyName = 'token'
  return localStorage.getItem(localStorageKeyName)
}

// checks to see if user is authenticated or not
export function isAuthenticated () {
  const authToken = getToken()
  console.log(authToken)
  if(authToken != null){
    return true
  } else {
    return false
  }
}

// set JWT token in local storage
export function setToken (token) {
  localStorage.setItem('token', token)
}