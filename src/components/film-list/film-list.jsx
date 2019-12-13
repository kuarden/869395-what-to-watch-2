import React, {PureComponent} from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import withActiveItem from "../../hocs/with-active-item";

export class FilmList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onHeaderClick, onChangeActiveItem = () => ({})} = this.props;
    return <div className="catalog__movies-list">{films.map((film, i) =>
      <FilmCard key = {`movie-${film.id}`}
        film = {film}
        onHeaderClick = {onHeaderClick}
        onMouseEnter= {() => onChangeActiveItem(i)}
        onMouseLeave = {() => onChangeActiveItem(-1)}>
      </FilmCard>
    )}</div>;
  }
}

FilmList.propTypes = {
  films: arrayOf(shape({
    id: number,
    name: string,
    genre: string,
    previewImage: string,
    videoLink: string,
  })).isRequired,
  onHeaderClick: func.isRequired,
  activeItem: number,
  onChangeActiveItem: func,
};

export default withActiveItem(FilmList);
