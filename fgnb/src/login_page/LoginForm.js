import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import { updateLoginForm, login } from "../utils/user";
import "./AuthForm.css";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 500
    },
    dense: {
        marginTop: theme.spacing(2)
    },
    menu: {
        width: 200
    }
}));

const useStylesButton = makeStyles({
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
    const classes = useStylesButton();
    return (
        <Button variant="outlined" className={classes.button}>
            SignUP
        </Button>
    );
}

function UserUsernameBox(prop) {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-username-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={e => updateLoginForm(e.target)}
            />
        </form>
    );
}

function UserPassWordBox(prop) {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-email-input"
                label="Password"
                className={classes.textField}
                type={prop.type}
                name="password"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                onChange={e => updateLoginForm(e.target)}
            />
        </form>
    );
}

class LoginForm extends React.Component {
    state = {
        passwordType: "password"
    };

    togglePasswordMask = () => {
        if (this.state.passwordType === "password") {
            this.setState({
                passwordType: "text"
            });
        } else {
            this.setState({
                passwordType: "password"
            });
        }
    };

    render() {
        return (
            <div className="main-container">
                <div>
                    <UserUsernameBox />
                    <UserPassWordBox type={this.state.passwordType} />
                </div>
                <div>
                    <Checkbox
                        type="checkbox"
                        onClick={this.togglePasswordMask}
                    />
                    Show Password
                </div>
                <Button variant="contained" onClick={login}>
                    Login
                </Button>
                <div>
                    <p>
                        <span className="signUptext">
                            Don't have an account yet? Signup here!
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

export default LoginForm;
