import { setState } from "statezero";

// Initialize all state paths used by app as empty.
// - currentUser state path is used by the root App component
// - studentForm and message state paths are used by the StudentForm component
// - studentList state path is used by the StudentList component
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
};
