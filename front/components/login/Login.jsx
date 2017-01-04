import React from 'react';
import $ from 'jQuery';

const Login = React.createClass({
  getInitialState() {
    return {username: '', password: ''};
  },
  submitLoginInfo() {
    $.ajax({
      method: 'POST',
      url: '/login',
      data: this.state
    })
    .done((data) => {
      console.log('received user data', data);
    })
  },
  updateUserName(event) {
    this.setState({username: event.target.value});
  },
  updatePassword(event) {
    this.setState({password: event.target.value});
  },
  render() {
    return (
      <div>
        Username:
        <input onChange={this.updateUserName} type="text"/>
        Password:
        <input onChange={this.updatePassword} type="text"/>
        <button onClick={this.submitLoginInfo}>Submit</button>
      </div>
    )
  }
});

export default Login;
