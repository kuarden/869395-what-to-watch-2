import React from 'react';
import renderer from "react-test-renderer";
import SignIn from './sign-in.jsx';

it(`Login correctly renders after relaunch`, () => {
  const tree = renderer.create(<SignIn
    onSubmit = {jest.fn()}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
