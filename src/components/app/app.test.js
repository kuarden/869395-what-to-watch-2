import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

export const FILMS = [
  {
    ID: 1,
    NAME: `Fantastic Beasts: The Crimes of Grindelwald`,
    IMAGE: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 2,
    NAME: `Bohemian Rhapsody`,
    IMAGE: `img/bohemian-rhapsody.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 3,
    NAME: `Macbeth`,
    IMAGE: `img/macbeth.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 4,
    NAME: `Aviator`,
    IMAGE: `img/aviator.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 5,
    NAME: `We need to talk about Kevin`,
    IMAGE: `img/we-need-to-talk-about-kevin.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 6,
    NAME: `What We Do in the Shadows`,
    IMAGE: `img/what-we-do-in-the-shadows.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 7,
    NAME: `Revenant`,
    IMAGE: `img/revenant.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 8,
    NAME: `Jonny English`,
    IMAGE: `img/johnny-english.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 9,
    NAME: `Shutter Island`,
    IMAGE: `img/shutter-island.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 10,
    NAME: `Pulp Fiction`,
    IMAGE: `img/pulp-fiction.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 11,
    NAME: `No Country for Old Men`,
    IMAGE: `img/no-country-for-old-men.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 12,
    NAME: `Snatch`,
    IMAGE: `img/snatch.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 13,
    NAME: `Moonrise Kingdom`,
    IMAGE: `img/moonrise-kingdom.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 14,
    NAME: `Seven Years in Tibet`,
    IMAGE: `img/seven-years-in-tibet.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 15,
    NAME: `Midnigth Special`,
    IMAGE: `img/midnight-special.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 16,
    NAME: `War of the Worlds`,
    IMAGE: `img/war-of-the-worlds.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 17,
    NAME: `Dardjeeling Limited`,
    IMAGE: `img/dardjeeling-limited.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 18,
    NAME: `Orlando`,
    IMAGE: `img/orlando.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    ID: 19,
    NAME: `Mindhunter`,
    IMAGE: `img/mindhunter.jpg`,
    URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    ID: 20,
    NAME: `Midnight Special`,
    IMAGE: `img/midnight-special.jpg`,
    URL: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

it(`App renders correctly`, () => {
  const tree = renderer.create(
      <App
        films={FILMS}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
}
);
