import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";

class signUp extends Component {
    state = {
        status: "",
        email: "",
        username: "",
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
    render() {
        return (
            <div>
                <SignUpForm
                    email={this.state.email}
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}

export default signUp;
