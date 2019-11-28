import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';
import {films} from "../../mocks/films.js";

it(`FilmCard renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    film={films[0]}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
