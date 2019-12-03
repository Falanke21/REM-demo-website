import React from "react";

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.history.push("/");
        }, 1000);
    }
    render() {
        return (
            <div>
                Page Not Found :(
                <div>
                    Redirecting in 1 sec...
                </div>
            </div>
        );
    }
}

export default PageNotFound;