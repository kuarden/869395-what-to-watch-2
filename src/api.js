import axios from 'axios';
import {ActionCreator} from './reducers/action-creator/action-creator';
import {URL, TIME_OUT} from './const';

export const api = axios.create({
  baseURL: `${URL}/wtw`,
  timeout: TIME_OUT,
  withCredentials: true,
});

export const createAPI = (dispatch) => {

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      dispatch(ActionCreator.requireAuthorization());
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
