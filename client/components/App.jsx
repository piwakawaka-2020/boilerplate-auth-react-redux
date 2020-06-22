// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { LOG_OFF_USER, logIn } from '../actions'


// define class component 
export class App extends React.Component {

  // set inital state
  state = {
    signInUser: '',
    signInPassword: '',
    registerUser: '',
    registerPassword: '',
    registerConfirmPassword: ''
  }

  // event handler for input events
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  // event handler for user log off
  handleLogOff = () => {
    this.props.dispatch({type: LOG_OFF_USER})
  }

  // event handler for user sign in
  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(logIn({
      username: this.state.signInUser,
      password: this.state.signInPassword
    }))
    this.setState({
      signInUser: '',
      signInPassword: '',
      registerUser: '',
      registerPassword: '',
      registerConfirmPassword: ''
    })
  }

  // event handler for user registeration

  // render the App component
  render(){
    return(
      <>
        <h1>Development has begun</h1>
        <h2>Behold I am the App component</h2>
        <form>
          <h2>Example Sign In Form</h2>
          <lable>username: </lable>
          <input onChange={this.handleChange} name='signInUser' value={this.state.signInUser} type='text'/>
          <label>password: </label>
          <input onChange={this.handleChange} name='signInPassword' value={this.state.signInPassword} type='password'/>
          <input type='submit' value='Sign in'/>
        </form>
        <form>
          <h2>Example Registration Form</h2>
          <label>username: </label>
          <input onChange={this.handleChange} name='registerUser' value={this.state.registerUser} type='text'/>
          <label>password: </label>
          <input onChange={this.handleChange} name='registerPassword' value={this.state.registerPassword} type='password'/>
          <label>confirm password: </label>
          <input onChange={this.handleChange} name='registerConfirmPassword' value={this.state.registerConfirmPassword} type='password'/>
          <input type='submit' value='Register'/>
        </form>
        <button onClick={this.handleLogOff}>Log Off</button>
      </>
    )
  }
}

export default connect()(App)