import React from "react";
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer/reducer";

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, genres, onChangeGenre, onGetFilms} = this.props;
    return <Main films={films} genres={genres} onChangeGenre={onChangeGenre} onGetFilms={onGetFilms} />;
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        genre: PropTypes.string,
        image: PropTypes.string,
        url: PropTypes.string,
      })
  ).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  onChangeGenre: PropTypes.func.isRequired,
  onGetFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    genre: state.activeItem,
    genres: state.genres,
    films: state.films,
  });

  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getFilms());
  },
  onGetFilms: () => dispatch(ActionCreator.getFilms())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

