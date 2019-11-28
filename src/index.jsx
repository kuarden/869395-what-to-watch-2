import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {App} from "./components/app/app.jsx";
import {films} from "./mocks/films";
import {reducer} from "./reducer/reducer.js";

const init = () => {

  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <App films={films}/>
  </Provider>,
  document.querySelector(`#root`));
};

init();
