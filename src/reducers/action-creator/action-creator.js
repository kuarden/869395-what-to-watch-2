export const ActionType = {
  GET_FILMS: `GET_FILMS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_GENRES: `GET_GENRES`,
  REQUIRE_AUTH: `REQUIRE_AUTH`,
  SIGN_IN: `SIGN_IN`,
  AUTH: `AUTH`,
};

const getGenresList = (films) => [`All genres`, ...Array.from(new Set(films.map(({genre}) => genre)))];
const snakeToCamel = (snakeString) => snakeString.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace(`-`, ``).replace(`_`, ``));

const convertData = (data) => {
  const newData = {};
  Object.keys(data).forEach((prop) =>{
    newData[snakeToCamel(prop)] = data[prop];
  });
  return newData;
};

const convertFilmsData = (films) => films.map((film) => convertData(film));

export const ActionCreator = {
  changeGenre: (genre) => ({type: ActionType.CHANGE_GENRE, payload: genre}),
  getFilms: (films) => {
    const res = {type: ActionType.GET_FILMS, payload: convertFilmsData(films)};
    return res;
  },
  getGenres: (films) => ({type: ActionType.GET_GENRES, payload: getGenresList(films)}),
  requireAuthorization: () => ({type: ActionType.REQUIRE_AUTH, payload: true}),
  signIn: (email, password) => ({type: ActionType.SIGN_IN, payload: {email, password}}),
  auth: (user) => ({type: ActionType.AUTH, payload: convertData(user)}),
  pushError: (errorText) => ({type: ActionType.ERROR, payload: errorText}),
};
