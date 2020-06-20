'use strict';
const axios = require('axios');

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const insertMovies = moviesJSON => {
            const films = moviesJSON.map(m => ({
                Title: m.title,
                Overview: m.overview,
                PosterPath: m.poster_path,
                VoteAverage: m.vote_average
            }));
            //inserta las primeras 20 movies
            return queryInterface.bulkInsert('Films', films, {});
        }
        try {
            //hacemos petición de las más populares
            const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=da008b62a8c2eea9cca280e6369d4ccc&language=es-Es')
            const moviesJSON = [];
            moviesJSON.push(...res.data.results); //primera página
            for (let i = 2; i < 100; i++) {
                const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=da008b62a8c2eea9cca280e6369d4ccc&language=es-Es'+ i)
                moviesJSON.push(...response.data.results) //segundas y sucesivas
            }
            console.log(moviesJSON.length)
            return insertMovies(moviesJSON);
        } catch (error) {
            console.log(error)
        }
    },
    down: (queryInterface, Sequelize) => {
    }
};
