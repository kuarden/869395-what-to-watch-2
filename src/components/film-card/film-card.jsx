import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

export class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.timerId = null;

    this._handleMovieClick = this._handleMovieClick.bind(this);
    this._handleMovieEnter = this._handleMovieEnter.bind(this);
    this._handleMovieLeave = this._handleMovieLeave.bind(this);
  }

  _handleMovieClick() {
    const {film} = this.props;
    location.href = `/film-overview-${film.id}`;
  }

  _handleMovieEnter() {
    this.timerId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, 1000);
  }

  _handleMovieLeave() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }
  }

  render() {
    const {film, onMouseEnter, onMouseLeave} = this.props;
    return <Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
        <div className="small-movie-card__image" onMouseEnter={() => {
          onMouseEnter(); this._handleMovieEnter();
        }} onMouseLeave={() => {
          onMouseLeave(); this._handleMovieLeave();
        }}>
          <VideoPlayer src={film.videoLink} poster={film.previewImage} muted={true} playerState={this.state} />
        </div>
        <h3 className="small-movie-card__title" onClick={() => this._handleMovieClick()}>
          <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
        </h3>
      </article>
    </Fragment>;
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
  }),
  onHeaderClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default FilmCard;
