import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {data} from "./data";

const init = () => {
  ReactDOM.render(<App filmsList={data}/>, document.querySelector(`#root`));
};

init();