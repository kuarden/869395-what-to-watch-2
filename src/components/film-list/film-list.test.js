import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {FilmList} from "./film-list.jsx";
import {films} from "../../mocks/films.js";

Enzyme.configure({adapter: new Adapter()});

it(`FilmList renders correctly`, () => {
  const tree = shallow(<FilmList
    films={films}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
