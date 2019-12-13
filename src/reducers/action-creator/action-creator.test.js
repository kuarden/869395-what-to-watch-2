import {ActionType, ActionCreator} from "./action-creator";

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for change genre`, () => expect(ActionCreator.changeGenre(`Comedy`
  )).toEqual({type: ActionType.CHANGE_GENRE, payload: `Comedy`}));

  it(`ActionCreator for get films`, () => expect(ActionCreator.getFilms([{genre: `Comedy`}, {genre: `Drama`}]
  )).toEqual({type: ActionType.GET_FILMS, payload: [{genre: `Comedy`}, {genre: `Drama`}]}));

  it(`ActionCreator for get genres`, () => expect(ActionCreator.getGenres([{genre: `Comedy`}, {genre: `Comedy`}, {genre: `Drama`}]
  )).toEqual({type: ActionType.GET_GENRES, payload: [`All genres`, `Comedy`, `Drama`]}));

  it(`ActionCreator for get required auth`, () => expect(ActionCreator.requireAuthorization()).toEqual({type: ActionType.REQUIRE_AUTH, payload: true}));

});
