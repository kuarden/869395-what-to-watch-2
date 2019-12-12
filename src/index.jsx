import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "./reducer/reducer";
import {genres, films} from './mocks/films';

const init = () => {
  const store = createStore(reducer,
      {genre: `All genres`, genres, films, allFilms: films},
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
