import { setState, getState } from "statezero";

import { setEmptyState } from "./helpers";
import { get } from "mongoose";

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
        method: "POST",
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
        method: "POST",
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

export const queryUser = () => {
    console.log("finding user");
    const { email } = getState("adminUserQueryForm");
    const url = `http://localhost:3001/api/user/admin/${email}`;
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.user) {
                setState("adminUserInspectForm.user", json.user);
            } else {
                return Promise.reject("Cannot find user");
            }
        })
        .catch(error => {
            console.log(error);
        })
};

export const updateUser = () => {
    console.log("updating user");
    const { user, username, blocked } = getState("adminUserInspectForm");
    const request = new Request(`http://localhost:3001/api/user/admin/${user.email}`, {
        method: "PATCH",
        body: JSON.stringify({ username, blocked }),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request)
    .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            console.log("Cannot update user");
        }
    })
    .then(json => {
        console.log(json);
        setState("adminUserInspectForm.user", json);
    })
    .catch(error => {
        console.log(error);
    })
};


export const getUserInfo = () =>{
    const userInfo = getState("loginForm");
    console.log(userInfo);
    return userInfo
}

export const getUserId = () =>{
    return getState("currentUser");
}

// export const getUserName = () =>{
//     const userId = getUserId();
//     const url = "http://localhost:3001/api/user"
//     const request = new Request(url, {
//         method: "GET",
//         body: JSON.stringify({userId})
//     });
//     console.log(request);
// }
export const updateSetting = () =>{
    console.log((getState("loginForm")));
    console.log("Update setting");
    const {newPassword, confirmPassword} = getState("settingForm");
    console.log(newPassword);
    console.log(confirmPassword);
    if (newPassword !== confirmPassword){
        console.log("Password Mismatch");
        alert("Password Mismatch");
    }
    else{
        const request = new Request(`http://localhost:3001/api/setting`);
        alert("Request send");
    }
}
export const updateSettingForm = field =>{
    const {name, value} = field;
    setState(`settingForm.${name}`, value);
    console.log(name);
    console.log(value);
    console.log(getState("settingForm"))
}

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

export const updateAdminUserInspectForm = field => {
    const { name, value } = field;
    setState(`adminUserInspectForm.${name}`, value);
}
