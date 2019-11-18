import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './filmCard.jsx';

const film = {id: 1, name: `Fantastic Beasts: The Crimes of Grindelwald`, image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`};

Enzyme.configure({adapter: new Adapter()});
describe(`<FilmCard />`, () => {

  it(`Click on the title works correctly`, () => {
    const clickHandler = jest.fn();

    const filmCard = shallow(<FilmCard
      film={film}
      handleClick={clickHandler}
    />);

    const name = filmCard.find(`.small-movie-card__title`);
    name.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Mouse over on the film card works correctly`, () => {
    const mouseOverHandler = jest.fn();

    const filmCard = shallow(<FilmCard
      film={film}
      handleMouseOver={mouseOverHandler}
    />);

    filmCard.find(`.small-movie-card`).simulate(`mouseover`);

    expect(mouseOverHandler).toHaveBeenCalledTimes(1);
    expect(mouseOverHandler).toHaveBeenCalledWith(film);
  });
});
