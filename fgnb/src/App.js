import React from "react";
import { BrowserRouter } from "react-router-dom";

import Mainview from "./root_views/Mainview";
import Authview from "./root_views/Authview";
import AdminDashBoard from "./admin_page/AdminDashBoard";
import StateReactComponent from "./component/StateReactComponent";
import { readCookie } from "./utils/user";

class App extends StateReactComponent {
    filterState({ currentUser }) {
        return { currentUser };
    }

    constructor(props) {
        super(props);
        readCookie();
    }

    render() {
        const { currentUser } = this.state;
        console.log(`Current user: ${currentUser}`);
        return (
            <div>
                <BrowserRouter>
                    {currentUser === "admin" ? (
                        <AdminDashBoard />
                    ) : currentUser ? (
                        <Mainview />
                    ) : (
                        <Authview />
                    )}
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
