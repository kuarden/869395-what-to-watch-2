import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {FILMS} from "./mocks/films";

const init = () => {
  ReactDOM.render(<App films={FILMS}/>, document.querySelector(`#root`));
};

init();
