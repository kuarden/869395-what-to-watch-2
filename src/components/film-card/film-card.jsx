import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';
import VideoPlayer from '../video-player/video-player.jsx';

export class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseOver() {
    this.setState({
      isPlaying: true
    });
  }

  handleMouseLeave() {
    this.setState({
      isPlaying: false
    });
  }

  render() {
    const {film, handleClick} = this.props;
    return <Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
        <div className="small-movie-card__image">
          <VideoPlayer src={film.url} poster={film.image} isPlaying={this.state.isPlaying} />
        </div>
        <h3 className="small-movie-card__title" onClick={handleClick}>
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
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func,
};

export default FilmCard;
