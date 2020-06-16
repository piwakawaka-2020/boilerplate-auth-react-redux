// import external modules
import request from 'superagent'

// define routes URLS
const baseUrl = '/api/v1/'
const authRoute = '/auth/'

// api calls

// reister a new user
export function addNewUser(user) {
  return request.post(`${baseUrl}${authRoute}register`)
    .send(user)
    .then(res => res.body)
}

// verify a users credentails

// get a varified users details