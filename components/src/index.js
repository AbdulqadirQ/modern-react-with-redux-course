import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail image={faker.image.avatar()} author="Bob ross" date="Today at 16:44pm" content="nice paints"/>
            <CommentDetail image={faker.image.avatar()} author="Huk Hogans" date="Yesterday at 3:13am" content="i get no brek"/>
            <CommentDetail image={faker.image.avatar()} author="Bob ross' dada" date="Friday 14th May at 11:45pm" content="more paint plis!"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
