import React from "react";
import renderer from "react-test-renderer";
import {GenreItem} from "./genre-item.jsx";

it(`GenreItem renders correctly`, () => {
  const tree = renderer.create(<GenreItem
    genreName={[`Fantasy`, `Drama`]}
    activeTab={false}
    onGenreClick={jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
