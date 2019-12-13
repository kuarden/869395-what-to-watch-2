import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from './video-player.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`<VideoPlayer />`, () => {

  const film = {
    id: 1,
    name: `Seven Years in Tibet`,
    genre: `Adventure`,
    previewImage: `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/seven-years-in-tibet.jpg`,
    videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`};

  const {previewImage, videoLink} = film;

  it(`The isPlaying property should be true on hover`, () => {

    const videoPlayer = (isPlaying) => {
      return shallow(
          <VideoPlayer src={videoLink} poster={previewImage} playerState={{}} isPlaying={isPlaying} />
      );
    };
    expect(videoPlayer(true).state().isPlaying).toBeTruthy();
  });

  it(`The isPlaying property should be false on hover`, () => {
    const videoPlayer = (isPlaying) => {
      return shallow(
          <VideoPlayer src={videoLink} poster={previewImage} playerState={{}} isPlaying={isPlaying} />
      );
    };

    expect(videoPlayer(false).state().isPlaying).toBeFalsy();
  });
});
