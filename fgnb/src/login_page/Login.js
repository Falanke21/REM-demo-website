import React, { Component } from "react";

import LoginForm from "./LoginForm.js";
import "./Login.css";
import loginlogo from "../asset/logo.png";

class Login extends Component {
    render() {
        return (
            <div>
                <img id="loginlogo" src={loginlogo} alt={"logo in login"} />
                <LoginForm />
            </div>
        );
    }
}

export default Login;
