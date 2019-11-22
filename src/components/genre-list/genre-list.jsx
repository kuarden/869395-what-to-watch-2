import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import GenreItem from '../genre-item/genre-item.jsx';

export class GenresList extends PureComponent {
  constructor(props) {
    super(props);
    this.genres = [`All genres`];
  }

  getGenresList() {
    const {films} = this.props;
    const genres = new Set(films.map((n) => n.genre));
    const genresArray = Array.from(genres);
    this.genres = this.genres.concat(genresArray).slice(0, genresArray.length + 1);
  }

  render() {
    const {genre} = this.props;
    this.getGenresList();
    return (
      <ul className="catalog__genres-list">
        {this.genres.map((n) => <GenreItem
          key={n}
          name={n}
          activeTab={n === genre ? true : false}
        />)}
      </ul>
    );
  }
}

GenresList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  genre: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  genre: state.genre,
});

export default connect(mapStateToProps)(GenresList);
