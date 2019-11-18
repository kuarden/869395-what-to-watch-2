import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from './filmList.jsx';

export const films = [
  {id: 1, name: `Fantastic Beasts: The Crimes of Grindelwald`, image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`},
  {id: 2, name: `Bohemian Rhapsody`, image: `img/bohemian-rhapsody.jpg`},
  {id: 3, name: `Macbeth`, image: `img/macbeth.jpg`},
  {id: 4, name: `Aviator`, image: `img/aviator.jpg`},
  {id: 5, name: `We need to talk about Kevin`, image: `img/we-need-to-talk-about-kevin.jpg`},
  {id: 6, name: `What We Do in the Shadows`, image: `img/what-we-do-in-the-shadows.jpg`},
  {id: 7, name: `Revenant`, image: `img/revenant.jpg`},
  {id: 8, name: `Jonny English`, image: `img/johnny-english.jpg`},
  {id: 9, name: `Shutter Island`, image: `img/shutter-island.jpg`},
  {id: 10, name: `Pulp Fiction`, image: `img/pulp-fiction.jpg`},
  {id: 11, name: `No Country for Old Men`, image: `img/no-country-for-old-men.jpg`},
  {id: 12, name: `Snatch`, image: `img/snatch.jpg`},
  {id: 13, name: `Moonrise Kingdom`, image: `img/moonrise-kingdom.jpg`},
  {id: 14, name: `Seven Years in Tibet`, image: `img/seven-years-in-tibet.jpg`},
  {id: 15, name: `Midnigth Special`, image: `img/midnight-special.jpg`},
  {id: 16, name: `War of the Worlds`, image: `img/war-of-the-worlds.jpg`},
  {id: 17, name: `Dardjeeling Limited`, image: `img/dardjeeling-limited.jpg`},
  {id: 18, name: `Orlando`, image: `img/orlando.jpg`},
  {id: 19, name: `Mindhunter`, image: `img/mindhunter.jpg`},
  {id: 20, name: `Midnight Special`, image: `img/midnight-special.jpg`},
];


it(`FilmList renders correctly`, () => {
  const tree = renderer.create(<FilmList films={films} />).toJSON();
  expect(tree).toMatchSnapshot();
});
