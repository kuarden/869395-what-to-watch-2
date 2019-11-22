import React from "react";
import renderer from "react-test-renderer";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from "../../reducer/reducer.js";
import GenreItem from "./genre-item.jsx";

it(`GenreItem renders correctly`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><GenreItem
      genreName={``}
      activeTab={false}
      onGenreClick={() => {}}
    /></Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});
