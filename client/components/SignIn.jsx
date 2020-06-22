// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { logIn } from '../actions'

// define class component
class SignIn extends React.Component {
  // set inital state
  state = {
    username: '',
    password: '',
  }

  // handler for input events
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  // hander for submit event
  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(logIn(this.state))
    this.setState({
      username: '',
      password: ''
    })
    this.props.history.push('/')
  }

  // display component
  render(){
    return <form onSubmit={this.handleSubmit}>
      <label>username:</label>
      <input type='text' onChange={this.handleChange} name='username' value={this.state.username}/>
      <label>password:</label>
      <input type='password' onChange={this.handleChange} name='password' value={this.state.password}/>
      <input type='submit' value='Sign in'/>
    </form>
  }
}

// export component
export default connect()(SignIn)