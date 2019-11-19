import React from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.videoPlayerRef = React.createRef();

    this.state = {
      isMuted: true,
      isPlaying: this.props.isPlaying
    };
  }

  componentDidUpdate() {
    const video = this.videoPlayerRef.current;

    if (this.props.isPlaying) {
      video.src = this.props.src;
      setTimeout(() => {
        video.play();
      }, 1000);
    } else {
      video.load();
      video.src = ``;
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
