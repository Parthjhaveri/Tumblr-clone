import React from 'react';
import '../../styles/login/login.css';
import {loginWithUsername, setUserInfo} from 'formActions';
import $ from 'jquery';

const Login = React.createClass({
  
  handleSubmit: function(e) {
    e.preventDefault();
    console.log(this.props.login);
    $.ajax({
      url: '/api/user/' + this.props.login,
      type: 'GET'
    })
    .done(function(user) {
      console.log('USER DATA FROM DB',user);
      setUserInfo(user);
    })
  },

  handleChange: function(e) {
    let name = e.target.name;
    let value =  e.target.value;
    loginWithUsername(name, value);
  },

  render: function() {
    console.log('PROPS:', this.props.currentUser);
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          Enter username: <input type="text" name="login" placeholder="Enter username" onChange={this.handleChange}/>
          <input type="submit" name="submit" value="Login"/>
        </form>
      </div>
    )
  }
})

export default Login;