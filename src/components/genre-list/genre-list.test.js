import React from 'react';
import renderer from "react-test-renderer";
import GenreList from './genre-list';

it(`GenresList renders correctly`, () => {
  const genres = [`Fantasy`, `Comedy`, `Drama`, `Adventures`];
  const tree = renderer
    .create(<GenreList genres = {genres} onGenreClick={jest.fn()}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
