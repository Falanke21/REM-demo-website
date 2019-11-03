import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./AuthForm.css";

const useStyles = makeStyles({
    button: {
        float: "right",
        position: "relative",
        background: "pink",
        border: 0,
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "black",
        height: 20,
        width: 1,
        padding: "0 30px"
    }
});

function SignUpButton() {
    const classes = useStyles();
    return <Button className={classes.button}>SignUp</Button>;
}

class AuthForm extends React.Component {
    togglePasswordMask = () => {
        const container = document.getElementById("passInput");
        if (container.type === "password") {
            container.type = "text";
        } else {
            container.type = "password";
        }
    };

    render() {
        return (
            <div className="main-container">
                <div>
                    <Input
                        name="username"
                        value={this.props.username}
                        onChange={this.props.handleChange}
                        type="text"
                        placeholder="Username"
                    />

                    <Input
                        id="passInput"
                        name="password"
                        value={this.props.password}
                        onChange={this.props.handleChange}
                        type="password"
                        placeholder="Password"
                    />

                    <Button variant="contained" onClick={this.props.checkAuth}>
                        Login
                    </Button>
                </div>

                <div>
                    <Checkbox
                        type="checkbox"
                        onClick={this.togglePasswordMask}
                    />
                    Show Password
                </div>
                <div>
                    <p>
                        <span className="signUptext">
                            If you do not have an account yet, click here!
                        </span>
                        <Link to={"./signup"}>
                            <SignUpButton></SignUpButton>
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default AuthForm;
