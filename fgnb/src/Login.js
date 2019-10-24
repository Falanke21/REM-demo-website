import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import AuthForm from './AuthForm.js'

class Login extends Component {
  state = {
    isValid: false,
    username: "",
    password: ""
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  checkAuth = () => {
    const username = this.state.username;
    const password = this.state.password;

    if (username === "admin" && password === "admin") {
      console.log("admin");
      this.setState({
        isValid: true
      })
    } else if (username === "csc309" && password === "csc309") {
      console.log("valid user");
    } else {
      console.log("invalid user");
    }
  };

  render() {
    if (this.state.isValid) {
      return (
        <Redirect to='/market'/>
      );
    } else {
      return (
        <div> 
          I'm the login page
          <Link to={"./market"}>
            <button>Go to market</button>
          </Link>
          <AuthForm
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            checkAuth={this.checkAuth}
          />
        </div>
      );
    }
  }
}

export default Login;
