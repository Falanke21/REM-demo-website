import { setState } from "statezero";

// Initialize all state paths used by app as empty.
// - currentUser state path is used by the root App component
// - loginForm state paths are used by the LoginForm component
// - signUpForm state paths are used by the SignUpForm component
export const setEmptyState = () => {
    setState("currentUser", null);

    setState("loginForm", {
        email: "",
        password: ""
    });
    setState("signUpForm", {
        email: "",
        password: "",
        username: ""
    });

    setState("adminUserQueryForm", {
        email: ""
    });
    setState("adminUserInspectForm", {
        user: null,
        username: "",
        password: "",
        editing: false,
        blocked: false
    });
    setState("settingForm", {
        email: "",
        password: "",
        username: ""
    });
    setState("userName", "")
};
