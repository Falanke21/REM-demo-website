import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import { signUp, updateSignUpForm } from "../utils/user";
import "../login_page/AuthForm.css";

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

function SignUpButton(props) {
    const classes = useStylesButton();
    return (
        <Button onClick={signUp} variant="outlined" className={classes.button}>
            Finish
        </Button>
    );
}

function BackButton() {
    const classes = useStylesButton();
    return (
        <Button variant="outlined" className={classes.button}>
            Cancel
        </Button>
    );
}

function UserEmailBox(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={e => updateSignUpForm(e.target)}
                value={props.value}
            />
        </form>
    );
}
function UserUsernameBox(props) {
    const classes = useStyles();

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-username-input"
                label="Username"
                className={classes.textField}
                type="username"
                name="username"
                autoComplete="username"
                margin="normal"
                variant="outlined"
                onChange={e => updateSignUpForm(e.target)}
                value={props.value}
            />
        </form>
    );
}

function UserPassWordBox(props) {
    const classes = useStyles();
    return (
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                name="password"
                autoComplete="password"
                margin="normal"
                variant="outlined"
                onChange={e => updateSignUpForm(e.target)}
                value={props.value}
            />
        </form>
    );
}

class SignUp extends React.Component {
    render() {
        return (
            <div className="main-container">
                <div>
                    <UserEmailBox />
                    <UserUsernameBox />
                    <UserPassWordBox />
                </div>
                <div>
                    <p>
                        <span className="signUptext">
                            Welcome to join us!!!!
                        </span>
                        <SignUpButton />
                        <Link to={"./"}>
                            <BackButton />
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}
export default SignUp;
