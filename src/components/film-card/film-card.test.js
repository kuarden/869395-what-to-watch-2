import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from './film-card.jsx';

it(`FilmCard renders correctly`, () => {
  const tree = renderer.create(<FilmCard
    film={{
      id: 1,
      name: `Seven Years in Tibet`,
      genre: `Adventure`,
      previewImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
      videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
