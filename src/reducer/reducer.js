export const ActionCreator = {
  changeGenre: (genre) => {
    return {type: `CHANGE_GENRE`, payload: genre};
  },
  getFilms: () => ({type: `GET_FILMS`})
};

const filter = (films, genre) => genre !== `All genres` ? films.filter(({genre: filmGenre})=> filmGenre === genre) : films;

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`: return Object.assign({}, state, {genre: action.payload});
    case `GET_FILMS`: return Object.assign({}, state, {films: filter(state.allFilms, state.genre)});
  }
  return state;
};
