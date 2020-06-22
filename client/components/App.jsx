// import external modules
import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// local imports
import { isAuthenticated } from '../utils/lib'
import SignIn from './SignIn'
import { LOG_OFF_USER } from '../actions'

// define class component 
export class App extends React.Component {

  handleClick = () => {
    this.props.dispatch({type: LOG_OFF_USER})
  }

  render(){
    const authed = isAuthenticated()
    return(
      <Router>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>
        {authed && <button onClick={this.handleClick}>Log off</button>}
        {!authed && <>
          <Link to='/signin'> Sign In </Link>
          <button>Register</button>
        </>}
        <Route path='/signin' component={SignIn}/>
      </Router>
    )
  }
}

export default connect()(App)