import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from "./reducers/reducer/reducer";
import {apiDispatcher} from "./reducers/api-dispatcher/api-dispatcher";
import {createAPI} from "./api";

const init = () => {
  const api = createAPI((...args) => store.dispatch(...args));

  const store = createStore(reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f)
  );

  store.dispatch(apiDispatcher.checkAuthorization());
  store.dispatch(apiDispatcher.loadFilms());

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector(`#root`)
  );
};

init();
