import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilmCard from './film-card.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`<FilmCard />`, () => {

  const film = {
    id: 1,
    name: `Seven Years in Tibet`,
    genre: `Adventure`,
    previewImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`};

  it(`Click on the title works correctly`, () => {
    const onClick = jest.fn();

    const filmCard = shallow(<FilmCard
      film={film}
      onHeaderClick={onClick}
    />);

    const headers = filmCard.find(`.small-movie-card catalog__movies-card`);
    headers.forEach((header) => {
      header.simulate(`click`);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  it(`The cursor is on the map of the film works correctly`, () => {
    const onMouseEnter = jest.fn();

    const filmCard = shallow(<FilmCard
      film={film}
    />);

    const headers = filmCard.find(`.small-movie-card catalog__movies-card`);
    headers.forEach((header) => {
      header.simulate(`mouseEnter`, {preventDefault: () => {}, target: {value: film}});
      expect(onMouseEnter.toHaveBeenCalledTimes(1));
      expect(onMouseEnter.toHaveBeenCalledWith(film));
    });
  });
});
