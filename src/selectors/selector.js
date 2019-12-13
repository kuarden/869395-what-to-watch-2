import {createSelector} from 'reselect';

const getFilmList = (state) => state.data.allFilms ? state.data.allFilms : [];

const getActiveGenre = (state) => state.user.genre ? state.user.genre : `All genres`;

export const getFilteredFilms = createSelector(
    getFilmList,
    getActiveGenre,
    (films, genre) => genre !== `All genres` ? films.filter(({genre: filmGenre}) => filmGenre === genre) : films
);
