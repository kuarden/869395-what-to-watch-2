import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {FilmList} from "./film-list.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`FilmList renders correctly`, () => {
  const tree = shallow(<FilmList
    films ={[
      {id: 1, name: `Macbeth`, genre: `Comedy`, previewImage: ``, videoLink: ``},
      {id: 2, name: `Aviator`, genre: `Drama`, previewImage: ``, videoLink: ``}
    ]}
    onHeaderClick = {jest.fn()}
    onMouseEnter = {()=> jest.fn()}
    onMouseLeave = {()=> jest.fn()}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
