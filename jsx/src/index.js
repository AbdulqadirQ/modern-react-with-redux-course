import React from "react"; // imports react and assigns it to the VARIABLE 'React'
import ReactDOM from "react-dom";

const App = () => {
    const buttonText = { text: 'Click me' }; // JSX can only print out 'text' if referring to it explicitly
    const style = {backgroundColor: 'blue', color: 'white'}; // JSX can assign whole JS objects to properties eg. style
    return (
        <div>
            <label className="label" for="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};

ReactDOM.render(
    <App />, // is the function defined above
    document.querySelector("#root")
);
