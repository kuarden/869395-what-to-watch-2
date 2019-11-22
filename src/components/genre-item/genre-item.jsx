import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../reducer/reducer.js';

export class GenreItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, activeTab, onGenreClick} = this.props;

    return (
      <li className={activeTab ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}>
        <a
          href="#"
          className="catalog__genres-link"
          onClick={(event) => {
            event.preventDefault();
            onGenreClick(event.target.textContent);
          }}
        >
          {name}
        </a>
      </li>
    );
  }
}

GenreItem.propTypes = {
  name: PropTypes.string,
  onGenreClick: PropTypes.func,
  activeTab: PropTypes.bool,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps,
    {
      genre: state.genre,
      films: state.films,
    });

const mapDispatchToProps = (dispatch) => ({
  onGenreClick: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilms(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreItem);

