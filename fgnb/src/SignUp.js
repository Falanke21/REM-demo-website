import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import AuthForm from './AuthForm.js';
import './Market.css';
import SignUpForm from './SignUpForm.js';

class signUp extends Component {
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
    render() {
        return (
        <div> 
            <SignUpForm
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            checkAuth={this.checkAuth}
            />
            </div>
          );
      }
}

export default signUp;
