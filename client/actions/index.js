// local imports
import { addNewUser, userSignIn, getUserDetails } from '../apis'
import { setToken } from '../utils/lib'

// export action calls
export const SAVE_USER = 'SAVE_USER'

// define dispatch actions
export function saveUser(details){
  return {
    type: SAVE_USER,
    username: details.username,
  }
}

// define Thunk functions

// sign in function
export function logIn(creds){
  return dispatch => {
    userSignIn(creds)
    .then(resBody => {
      setToken(resBody.token)
      return resBody
    })
    .then(() => getUserDetails())
    .then(userDetails => {dispatch(saveUser(userDetails))})
  }
}