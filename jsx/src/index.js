import React from "react"; // imports react and assigns it to the VARIABLE 'React'
import ReactDOM from "react-dom";

const App = () => {
    return <div>Hi there!</div>;
};

ReactDOM.render(
    <App />, // is the function defined above
    document.querySelector("#root")
);
