import React from "react";
import ReactDOM from "react-dom";
import NotesApp from "./components/NotesApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<NotesApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
