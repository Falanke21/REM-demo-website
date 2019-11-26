import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, emphasize } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import "./AuthForm.css";
import TextField from "@material-ui/core/TextField";

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
                value={prop.value}
                onChange={prop.onChange}
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
                value={prop.value}
                onChange={prop.onChange}
            />
        </form>
    );
}

class LoginForm extends React.Component {
    state = {
        passwordType: "password"
    }

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
                    <UserUsernameBox
                        name="email"
                        value={this.props.email}
                        onChange={this.props.handleUsername}
                        type="text"
                        placeholder="Email"
                    ></UserUsernameBox>
                    <UserPassWordBox
                         id="passInput"
                         name="password"
                         value={this.props.password}
                         onChange={this.props.handleChange}
                         type={this.state.passwordType}
                         placeholder="Password"></UserPassWordBox>
                </div>
                <div>
                    <Checkbox
                        type="checkbox"
                        onClick={this.togglePasswordMask}
                    />
                    Show Password
                </div>
                <Button variant="contained" onClick={this.props.checkAuth}>
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
