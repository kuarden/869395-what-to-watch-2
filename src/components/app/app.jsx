import React from "react";
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducers/action-creator/action-creator";
import {getFilteredFilms} from "../../selectors/selector";

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
        genre: PropTypes.string,
        name: PropTypes.string,
        previewImage: PropTypes.string,
        videoLink: PropTypes.string,
      })
  ).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  onChangeGenre: PropTypes.func.isRequired,
  onGetFilms: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    genre: state.activeItem,
    genres: state.data.genres || [`All genres`],
    films: getFilteredFilms(state),
  });

  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onGetFilms: (films) => dispatch(ActionCreator.getFilms(films))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

