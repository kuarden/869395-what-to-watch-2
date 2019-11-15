import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {films} from "./data";

const init = () => {
  ReactDOM.render(<App films={films}/>, document.querySelector(`#root`));
};

init();
