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
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(response.data));
      });
  }
};
