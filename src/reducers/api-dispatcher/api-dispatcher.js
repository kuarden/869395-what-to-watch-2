import {ActionCreator} from '../action-creator/action-creator';
import {api} from "../../api";

export const apiDispatcher = {
  loadFilms: () => (dispatch) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.getFilms(response.data));
        dispatch(ActionCreator.getGenres(response.data));
      });
  },
  checkAuthorization: () => (dispatch) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(!data));
        if (data) {
          dispatch(ActionCreator.auth(data));
        }
      })
    .catch((err) => {
      dispatch(ActionCreator.pushError(err.response));
    });
  },
  signIn: (email, password) => (dispatch) => {
    return api.post(`/login`, {email, password})
      .then(({data}) => {
        dispatch(ActionCreator.requireAuthorization(false));
        dispatch(ActionCreator.auth(data));
      });
  },
};
