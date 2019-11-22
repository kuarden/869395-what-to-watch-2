import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reducer/reducer.js";
import GenresList from "./genre-list.jsx";

it(`GenresList renders correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><GenresList
      films={[]}
    /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
