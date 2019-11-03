import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import AuthForm from './AuthForm.js'
import LoginForm from './LoginForm.js'
import "./Login.css";
import loginlogo from './asset/logo.png';
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

  handleAccount = (event) => {
    this.setState({
      username: event.target.value
    })
  }

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
    console.log(`state is ${this.state.status}`);
    console.log(`user is ${this.state.username}`);
    console.log(`user is ${this.state.password}`);
    
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
          {/* I'm the login page
          <Link to={"./market"}>
            <button>Go to market</button>
          </Link> */}
          <img id="loginlogo" src={loginlogo} alt={"logo in login"} />
          <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          handleAccount={this.handleAccount}
          checkAuth={this.checkAuth}></LoginForm>
          {/* <AuthForm
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            checkAuth={this.checkAuth}
          /> */}
        </div>
      );

    }
  }

}

export default Login;
