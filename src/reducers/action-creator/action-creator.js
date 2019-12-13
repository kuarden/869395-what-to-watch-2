export const ActionType = {
  GET_FILMS: `GET_FILMS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`
};

const getGenresList = (films) => [`All genres`, ...Array.from(new Set(films.map(({genre}) => genre)))];
const snakeToCamel = (snakeString) => snakeString.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(`-`, ``).replace(`_`, ``));

const convertFilmData = (film) => {
  const newFilm = {};
  Object.keys(film).forEach((prop) =>{
    newFilm[snakeToCamel(prop)] = film[prop];
  });
  return newFilm;
};

const convertFilmsData = (films) => films.map((film) => convertFilmData(film));

export const ActionCreator = {


  changeGenre: (genre) => ({type: ActionType.CHANGE_GENRE, payload: genre}),
  getFilms: (films) => {
    const res = {type: ActionType.GET_FILMS, payload: convertFilmsData(films)};
    return res;
  },
  getGenres: (films) => ({type: ActionType.GET_GENRES, payload: getGenresList(films)}),
  requireAuthorization: () => ({type: ActionType.REQUIRE_AUTH, payload: true})
};
