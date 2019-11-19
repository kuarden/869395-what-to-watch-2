import React, {PureComponent} from 'react';
import FilmCard from '../film-card/film-card.jsx';
import PropTypes from "prop-types";

export default class FilmList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = {
      activeFilmCard: null
    };
  }

  handleMouseOver(film) {
    this.setState({
      activeFilmCard: film,
    });
  }

  render() {
    const {films} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, n) => <FilmCard film={film} handleMouseOver={this.handleMouseOver} key={`${film.id} ${n}`} />)}
      </div>
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};
