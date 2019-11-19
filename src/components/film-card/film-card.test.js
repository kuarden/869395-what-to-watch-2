import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

const FILM = {
  ID: 1,
  NAME: `Fantastic Beasts: The Crimes of Grindelwald`,
  IMAGE: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`FilmCard renders correctly`, () => {
  const tree = renderer.create(<FilmCard film={FILM} />).toJSON();
  expect(tree).toMatchSnapshot();
});
