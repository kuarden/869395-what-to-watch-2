import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from "react-router-dom";
import Main from '../main/main.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/action-creator/action-creator';
import {apiDispatcher} from "../../reducers/api-dispatcher/api-dispatcher";
import {getFilteredFilms} from '../../selectors/selector';
import {ErrorHandler} from '../error-handler/error-handler.jsx';
import {SignIn} from '../sign-in/sign-in.jsx';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, genres, onChangeGenre, onGetFilms, submitHandler, isAuthorizationRequired, auth} = this.props;
    return <Switch>
      <Route path="/" exact render={() =>
        <ErrorHandler>
          <Main films = {films} onChangeGenre={onChangeGenre} onGetFilms={onGetFilms} genres={genres} auth={auth} />
        </ErrorHandler>}/>
      <Route path="/login" exact render={() =>
        <ErrorHandler>
          <SignIn submitHandler={submitHandler} isAuthorizationRequired={isAuthorizationRequired}/>
        </ErrorHandler>}/>
    </Switch>;
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
  submitHandler: PropTypes.func,
  isAuthorizationRequired: PropTypes.bool,
  auth: PropTypes.shape({})
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    genre: state.activeItem,
    genres: state.data.genres || [`All genres`],
    films: getFilteredFilms(state),
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth,
  });

  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onGetFilms: (films) => dispatch(ActionCreator.getFilms(films)),
  submitHandler: (email, password) => dispatch(apiDispatcher.signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

