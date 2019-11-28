import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genre-list.jsx";
import {films} from "../../mocks/films.js";

Enzyme.configure({adapter: new Adapter()});

it(`GenresList renders correctly`, () => {
  const tree = shallow(<GenresList
    films={films}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
