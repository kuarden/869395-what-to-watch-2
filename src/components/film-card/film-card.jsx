import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

const FilmCard = (props) => {

  const {film, handleClick, handleMouseOver} = props;

  return <Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseOver={() => handleMouseOver(film)}>
      <div className="small-movie-card__image">
        <img src={film.image} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title" onClick={handleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{film.name}</a>
      </h3>
    </article>
  </Fragment>;
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func,
  handleMouseOver: PropTypes.func,
};

export default FilmCard;
