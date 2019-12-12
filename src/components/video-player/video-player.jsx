import React from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoPlayerRef = React.createRef();

    this.playTimeout = null;

    this.state = {
      isMuted: true,
      isPlaying: this.props.isPlaying
    };
  }

  componentWillUnmount() {
    if (typeof this.playTimeout !== `undefined`) {
      clearTimeout(this.playTimeout);
    }
  }

  componentDidUpdate() {
    const video = this.videoPlayerRef.current;
    if (video) {
      if (this.props.isPlaying) {
        video.src = this.props.src;
        this.playTimeout = setTimeout(() => {
          video.play();
        }, 1000);
      } else {
        if (typeof this.playTimeout !== `undefined`) {
          clearTimeout(this.playTimeout);
          video.load();
          video.src = ``;
        }
      }
    }
  }

  render() {
    const {poster} = this.props;
    const {isMuted} = this.state;
    return (
      <video ref={this.videoPlayerRef} poster={poster} muted={isMuted} width="280" height="175" />
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};
