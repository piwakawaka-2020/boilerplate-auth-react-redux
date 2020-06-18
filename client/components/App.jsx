// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// local imports
import { isAuthenticated } from '../utils/lib'
import SignIn from './SignIn'

// define class component 
export class App extends React.Component {
  render(){
    return(
      <Router>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>
        {isAuthenticated() && <button>Log off</button>}
        {!isAuthenticated() && <>
          <Link to='/signin'> Sign In </Link>
          <button>Register</button>
        </>}
        <Route path='/signin' component={SignIn}/>
      </Router>
    )
  }
}

export default connect()(App)