import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reducer/reducer.js";
import App from "./app.jsx";

it(`App renders correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><App
      films={[]}
    /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
