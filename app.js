const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie = prompt("Один из просмотренных фильмов", "");
const lastMovieRate = +prompt("На сколько его оцените", "");

personalMovieDB.movies[lastMovie] = lastMovieRate;

console.log(personalMovieDB);