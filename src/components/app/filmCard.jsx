import React, {Fragment} from 'react';
import {PropTypes} from 'prop-types';

const FilmCard = (props) => {

  const {data} = props;

  return <Fragment>
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={data.image} alt={data.name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{data.name}</a>
      </h3>
    </article>
  </Fragment>;
};

FilmCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default FilmCard;
