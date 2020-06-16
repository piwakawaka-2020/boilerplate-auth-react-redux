// import external modules
import React from 'react'
import { connect } from 'react-redux'

// local imports
import { logIn } from '../actions'

// define class component
class SignIn extends React.Component {
  // create initial local state
  state = {
    username: '',
    pasword: ''
  }

  // handler for input events
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  // hander for submit event
  handleSubmit = event => {
    event.preventDefult()
    this.props.dispatch(logIn)
  }

  // display component
  render(){
    return <form onSubmit={this.handleSubmit}>
      <label>username:</label>
      <input type='text' onChange={this.handleChange} name='username' value={this.state.username}/>
      <label>username:</label>
      <input type='password' onChange={this.handleChange} name='username' value={this.state.username}/>
      <input type='submit' value='Sign in'/>
    </form>
  }
}

// export component
export default connect()(SignIn)