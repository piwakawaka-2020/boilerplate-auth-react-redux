// import external modules
import React from 'react'
import { connect } from 'react-redux'

class SignIn extends React.Component {
  state = {
    username: '',
    pasword: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefult()
  }

  render(){
    return <form onSubmit={this.handleSubmit}>
      <label>username:</label>
      <input type='text' onChange={this.handleChange} name='username' value={this.state.username}/>
      <label>username:</label>
      <input type='text' onChange={this.handleChange} name='username' value={this.state.username}/>
      <input type='submit' value='Sign in'/>
    </form>
  }
}