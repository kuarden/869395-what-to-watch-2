import {ActionType} from '../action-creator/action-creator';

export const user = (state = {}, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE: return Object.assign({}, state, {genre: action.payload});
  }
  return state;
};
