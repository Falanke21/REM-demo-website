import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
// import AuthForm from './AuthForm.js'
import LoginForm from "./LoginForm.js";
import "./Login.css";
import loginlogo from "../asset/logo.png";
class Login extends Component {
    state = {
        status: undefined,
        email: "",
        password: ""
    };

    handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    handleAccount = event => {
        this.setState({
            email: event.target.value
        });
    };

    checkAuth = () => {
        const email = this.state.email;
        const password = this.state.password;

        // if (email === "admin" && password === "admin") {
        //   this.setState({
        //     status: "admin"
        //   })
        // } else if (email === "user" && password === "user") {
        //   this.setState({
        //     status: "user"
        //   })
        // } else {
        //   alert("email or Password incorrect")
        // }

        // Create our request constructor with all the parameters we need
        const request = new Request("/api/login", {
            method: "post",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });

        // Send the request with fetch()

        // make sure we use React "this"
        const that = this;
        fetch(request)
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
            })
            .then(json => {
                if (json.auth) {
                    that.setState({
                      status: email
                    });
                }
                else {
                    alert("Log in failed");
                }
            })
            .catch(error => {
                alert(error);
            });
    };

    render() {
        if (this.state.status) {
            return <Redirect to="/market" />;
        } else if (this.state.status === "admin") {
            return <Redirect to="/admindash" />;
        } else {
            return (
                <div>
                    {/* I'm the login page
          <Link to={"./market"}>
            <button>Go to market</button>
          </Link> */}
                    <img id="loginlogo" src={loginlogo} alt={"logo in login"} />
                    <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        handleChange={this.handleChange}
                        handleAccount={this.handleAccount}
                        checkAuth={this.checkAuth}
                    ></LoginForm>
                    {/* <AuthForm
            email={this.state.email}
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
