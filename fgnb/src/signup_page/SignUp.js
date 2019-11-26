import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";

class signUp extends Component {
    state = {
        status: undefined,
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

    signUpRequest = () => {
        const email = this.state.email;
        const password = this.state.password;
        const username = this.state.username;

        // Create our request constructor with all the parameters we need
        const request = new Request("http://localhost:3001/api/signup", {
            method: "post",
            body: JSON.stringify({
                email: email,
                password: password,
                username: username
            }),
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
                return res.json();
            })
            .then(json => {
                console.log(json);
                if (json.user) {
                    that.setState({
                        status: "signedup"
                    });
                    console.log("signed up");
                } else {
                    alert(`Sign up failed with error ${json.error.message}`);
                }
            })
            .catch(error => {
                alert(error);
            });
    };

    render() {
        return (
            <div>
                <SignUpForm
                    status={this.state.status}
                    email={this.state.email}
                    username={this.state.username}
                    password={this.state.password}
                    handleChange={this.handleChange}
                    signUpRequest={this.signUpRequest}
                />
            </div>
        );
    }
}

export default signUp;
