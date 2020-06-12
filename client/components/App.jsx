// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { getToken, isAuthenticated } from '../utils/lib'

// local imports

// define class component 
export class App extends React.Component {
  render(){
    const token = getToken()
    return(
      <>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>
        <p>{token}</p>
        {isAuthenticated() && <button>Log off</button>}
        {!isAuthenticated() && <>
          <button>Sign in</button>
          <button>Register</button>
        </>}
      </>
    )
  }
}

export default connect()(App)