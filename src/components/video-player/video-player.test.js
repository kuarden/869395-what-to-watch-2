import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const FILM = {
  ID: 1,
  NAME: `Fantastic Beasts: The Crimes of Grindelwald`,
  IMAGE: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`VideoPlayer renders correctly`, () => {
  const tree = renderer.create(<VideoPlayer src={FILM.URL} isPlaying={false} poster={FILM.IMAGE} />).toJSON();
  expect(tree).toMatchSnapshot();
});
