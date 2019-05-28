import React from "react"; // imports react and assigns it to the VARIABLE 'React'
import ReactDOM from "react-dom";

function getButtonText() {
    return 'Click on me!';
}

const App = () => {
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
        </div>
    );
};

ReactDOM.render(
    <App />, // is the function defined above
    document.querySelector("#root")
);
