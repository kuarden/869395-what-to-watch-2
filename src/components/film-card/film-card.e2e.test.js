import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

const film = {
  id: 1,
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  url: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

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

  it(`The cursor is on the map of the film works correctly`, () => {
    const filmCard = shallow(<FilmCard
      film={film}
    />);

    filmCard.find(`.small-movie-card`).simulate(`mouseover`);
    expect(filmCard.state(`isPlaying`)).toBe(true);
  });

  it(`The cursor is on the map of the film works correctly`, () => {
    const filmCard = shallow(<FilmCard
      film={film}
    />);

    filmCard.find(`.small-movie-card`).simulate(`mouseleave`);
    expect(filmCard.state(`isPlaying`)).toBe(false);
  });

});
