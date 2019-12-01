import React from "react";
import { BrowserRouter } from "react-router-dom";

import Mainview from "./root_views/Mainview";
import Authview from "./root_views/Authview";
import Adminview from "./root_views/Adminview";
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
                        <Adminview />
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
