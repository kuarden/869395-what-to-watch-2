import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';
import {films} from "../../mocks/films.js";

Enzyme.configure({adapter: new Adapter()});

describe(`<FilmCard />`, () => {

  it(`Click on the title works correctly`, () => {
    const clickHandler = jest.fn();

    const filmCard = shallow(<FilmCard
      film={films[0]}
      handleClick={clickHandler}
    />);

    const name = filmCard.find(`.small-movie-card__title`);
    name.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`The cursor is on the map of the film works correctly`, () => {
    const filmCard = shallow(<FilmCard
      film={films[0]}
    />);

    filmCard.find(`.small-movie-card`).simulate(`mouseover`);
    expect(filmCard.state(`isPlaying`)).toBe(true);
  });

  it(`The cursor is on the map of the film works correctly`, () => {
    const filmCard = shallow(<FilmCard
      film={films[0]}
    />);

    filmCard.find(`.small-movie-card`).simulate(`mouseleave`);
    expect(filmCard.state(`isPlaying`)).toBe(false);
  });

});
