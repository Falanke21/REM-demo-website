import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

import AuthForm from './AuthForm.js'

class Login extends Component {
  state = {
    status: "",
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
      this.setState({
        status: "admin"
      })
    } else if (username === "user" && password === "user") {
      this.setState({
        status: "user"
      })
    }
  };

  render() {
    if (this.state.status === "user") {
      return (
        <Redirect to='/market'/>
      );
    } else if (this.state.status === "admin") {
      return (
        <Redirect to='/admindash'/>
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
          <Link to={"./signUp"}>
            <button>signUpHere</button>
          </Link>
        </div>
      );

    }
  }

}

export default Login;
