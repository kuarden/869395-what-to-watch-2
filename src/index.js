import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {data} from "./data.jsx";

const init = () => {
  ReactDOM.render(<App filmsName={data}/>, document.querySelector(`#root`));
};

init();
