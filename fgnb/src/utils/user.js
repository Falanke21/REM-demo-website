import { setState, getState } from "statezero";

import { setEmptyState } from "./helpers";

export const readCookie = () => {
    const url = "http://localhost:3001/api/user/verify";
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.user) {
                setState("currentUser", json.user);
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const login = () => {
    const { email, password } = getState("loginForm");
    const request = new Request("http://localhost:3001/api/user/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 400) {
                return Promise.reject(
                    "The email and password you entered didn't match"
                );
            } else {
                return Promise.reject(
                    `Didn't find the user with email: ${email}`
                );
            }
        })
        .then(json => {
            console.log(json.user);
            if (json.user) {
                setState("currentUser", json.user);
            }
        })
        .catch(error => {
            alert(error);
        });
};

export const signUp = () => {
    const { email, password, username } = getState("signUpForm");
    const request = new Request("http://localhost:3001/api/user/signup", {
        method: "post",
        body: JSON.stringify({ email, password, username }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log(json);
            if (json.user) {
                setState("currentUser", json.user);
            } else {
                alert(`Sign up failed with error ${json.error.message}`);
            }
        })
        .catch(error => {
            alert(error);
        });
};

export const logout = () => {
    const url = "http://localhost:3001/api/user/logout";
    fetch(url)
        .then(res => {
            setEmptyState();
        })
        .catch(error => {
            console.log(error);
        });
};

export const queryUser = () => {};

export const updateLoginForm = field => {
    const { name, value } = field;
    setState(`loginForm.${name}`, value);
};

export const updateSignUpForm = field => {
    const { name, value } = field;
    setState(`signUpForm.${name}`, value);
};

export const updateAdminUserQueryForm = field => {
    const { name, value } = field;
    setState(`adminUserQueryForm.${name}`, value);
}
