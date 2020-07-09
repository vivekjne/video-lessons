import React from "react";
import ReactDOM from "react-dom";
import MaterialSample from "./MaterialSample";
function Example() {
    return <MaterialSample />;
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
