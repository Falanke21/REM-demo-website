import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, emphasize } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import "../login_page/AuthForm.css";
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
                onChange={props.handleChange}
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
                onChange={props.handleChange}
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
                onChange={props.handleChange}
                value={props.value}
            />
        </form>
    );
}

class SignUpForm extends React.Component {
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
                    <UserEmailBox value={this.props.email} handleChange={this.props.handleChange} />
                    <UserUsernameBox value={this.props.username} handleChange={this.props.handleChange} />
                    <UserPassWordBox value={this.props.password} handleChange={this.props.handleChange} />
                </div>

                <div>
                    <p>
                        <span className="signUptext">
                            Welcome to join us!!!!
                        </span>
                        <Link to={"./signup"}>
                            <SignUpButton></SignUpButton>
                        </Link>
                        <Link to={"./"}>
                            <BackButton />
                        </Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
