import React from "react";
import ReactDOM from "react-dom";
import App from "App";


class FullpageWrapper extends React.Component {
    render() {
        return <App />;
    }
}

ReactDOM.render(<FullpageWrapper/>, document.getElementById("root"));

export default FullpageWrapper;
