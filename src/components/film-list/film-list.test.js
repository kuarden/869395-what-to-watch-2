import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reducer/reducer.js";

import FilmList from "./film-list.jsx";

it(`FilmList renders correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer.create(<Provider store={store}>
    <FilmList films={[]}/></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

