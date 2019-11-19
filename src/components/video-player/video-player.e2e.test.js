import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from './video-player.jsx';

const FILM = {
  ID: 1,
  NAME: `Fantastic Beasts: The Crimes of Grindelwald`,
  IMAGE: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  URL: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

Enzyme.configure({adapter: new Adapter()});

describe(`<VideoPlayer />`, () => {

  it(`The isPlaying property should be true on hover`, () => {
    const videoPlayer = (isPlaying) => {
      return mount(
          <VideoPlayer src={FILM.URL} poster={FILM.IMAGE} isPlaying={isPlaying} />
      );
    };
    expect(videoPlayer(true).state().isPlaying).toBeTruthy();
  });

  it(`The isPlaying property should be false on hover`, () => {
    const videoPlayer = (isPlaying) => {
      return mount(
          <VideoPlayer src={FILM.URL} poster={FILM.IMAGE} isPlaying={isPlaying} />
      );
    };

    expect(videoPlayer(false).state().isPlaying).toBeFalsy();
  });
});
