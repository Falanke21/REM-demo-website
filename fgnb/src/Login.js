import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import AuthForm from './AuthForm.js'

class Login extends Component {
  state = {
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
    } else if (username === "csc309" && password === "csc309") {
      console.log("valid user");
    } else {
      console.log("invalid user");
    }
  };

  render() {
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

export default Login;
