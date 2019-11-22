import {ActionCreator, reducer, initialState} from "./reducer";

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator change genre`, () => {
    expect(ActionCreator.changeGenre(`Comedy`))
            .toEqual({
              type: `CHANGE_GENRE`,
              payload: `Comedy`,
            });
  });

  it(`ActionCreator get films`, () => {
    expect(ActionCreator.getFilms(`Comedy`))
            .toEqual({
              type: `GET_FILMS`,
              payload: [{
                id: 8,
                name: `Johnny English`,
                image: `img/johnny-english.jpg`,
                genre: `Comedy`,
                url: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
              }],
            });
  });
});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters return initial state`, () => {
    expect(reducer(undefined, {}))
        .toEqual(initialState);
  });
});
