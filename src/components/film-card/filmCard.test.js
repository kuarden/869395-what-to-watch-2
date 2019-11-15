import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './filmCard.jsx';

const film = {id: 1, name: `Fantastic Beasts: The Crimes of Grindelwald`, image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`};

it(`FilmCard renders correctly`, () => {
  const tree = renderer.create(< FilmCard film={film} />).toJSON();
  expect(tree).toMatchSnapshot();
});
