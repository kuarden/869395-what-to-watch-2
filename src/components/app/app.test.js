import React from "react";
import Enzyme, {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import {App} from "./app.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`App renders correctly`, () => {
  const tree = shallow(<App
    films={[{genre: `Comedy`, name: `Mask`, videoLink: ``, previewImage: ``}]}
    onChangeGenre = {jest.fn()}
    onGetFilms = {jest.fn()}
  />);

  expect(toJson(tree)).toMatchSnapshot();
});
