'use strict';


let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Склолько фильмов вы уде посмотрели?','');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Склолько фильмов вы уде посмотрели?','');
     }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function  remeberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// remeberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Киноман');
    } else {
        console.log('Ошибка');
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <=3; i++){
        const genre = 
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
    
}

writeYourGenres();
