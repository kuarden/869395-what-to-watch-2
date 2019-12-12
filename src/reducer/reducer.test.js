import {ActionCreator, reducer} from "./reducer";

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator change genre`, () => {
    expect(ActionCreator.changeGenre(`Comedy`))
      .toEqual({
        type: `CHANGE_GENRE`,
        payload: `Comedy`,
      });
  });

  it(`ActionCreator get films`, () => {
    expect(ActionCreator.getFilms())
      .toEqual({type: `GET_FILMS`});
  });
});

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () =>
    expect(
        reducer(undefined, {}))
      .toEqual({})
  );

  it(`Reducer filters films`, () =>
    expect(
        reducer(
            {genre: `Comedy`, allFilms: [{genre: `Comedy`}, {genre: `Drama`}], films: []},
            {type: `GET_FILMS`})
    ).toEqual({genre: `Comedy`, allFilms: [{genre: `Comedy`}, {genre: `Drama`}], films: [{genre: `Comedy`}]})
  );

  it(`Reducer changes genre`, () =>
    expect(
        reducer(
            {genre: `All genres`, films: [{genre: `Comedy`}, {genre: `Drama`}]},
            {type: `CHANGE_GENRE`, payload: `Comedy`})
    ).toEqual({genre: `Comedy`, films: [{genre: `Comedy`}, {genre: `Drama`}]})
  );
});
