import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from './video-player.jsx';
import {films} from "../../mocks/films.js";

Enzyme.configure({adapter: new Adapter()});

describe(`<VideoPlayer />`, () => {

  const {url, image} = films[0];

  it(`The isPlaying property should be true on hover`, () => {

    const videoPlayer = (isPlaying) => {
      return shallow(
          <VideoPlayer src={url} poster={image} isPlaying={isPlaying} />
      );
    };
    expect(videoPlayer(true).state().isPlaying).toBeTruthy();
  });

  it(`The isPlaying property should be false on hover`, () => {
    const videoPlayer = (isPlaying) => {
      return shallow(
          <VideoPlayer src={url} poster={image} isPlaying={isPlaying} />
      );
    };

    expect(videoPlayer(false).state().isPlaying).toBeFalsy();
  });
});
