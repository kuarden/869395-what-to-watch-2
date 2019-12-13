import React from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    // console.log(props);


    this.videoPlayerRef = React.createRef();
    this.playTimeout = null;
    this.state = {isPlaying: this.props.isPlaying};
  }

  componentWillUnmount() {
    if (typeof this.playTimeout !== `undefined`) {
      clearTimeout(this.playTimeout);
    }
  }

  componentDidMount() {
    const {src, muted} = this.props;
    const video = this.videoPlayerRef.current;
    if (video === null) {
      return;
    }
    video.src = src;
    video.muted = muted;
  }

  componentDidUpdate() {
    const {playerState} = this.props;
    this.setState({isPlaying: playerState.isPlaying});
    const video = this.videoPlayerRef.current;
    if (video === null) {
      return;
    }
    if (playerState.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  render() {
    const {poster} = this.props;
    return (
      <video ref={this.videoPlayerRef} poster={poster} width="280" height="175" />
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  playerState: PropTypes.exact({
    isPlaying: PropTypes.bool
  }).isRequired,
  isPlaying: PropTypes.bool,
  muted: PropTypes.bool,
};
