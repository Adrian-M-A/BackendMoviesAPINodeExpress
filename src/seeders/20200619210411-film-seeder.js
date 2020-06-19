'use strict';
const axios = require('axios');
const movie = require('../models/movie');
module.exports = {
    up: async(queryInterface, Sequelize) => {
        const insertMovies = moviesJSON => {
            const movies = moviesJSON.map(m => ({
                Title: m.title,
                Overview: m.overview,
                PosterPath: m.poster_path,
                VoteAverage:m.vote_average
            }));
        }
        try {
            for (let i = 1; i < res.data.total_pages; i++) {
                const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=da008b62a8c2eea9cca280e6369d4ccc&language=es-ES&page=' + i)

                moviesJSON.push(...response.data.results)
            }
            console.log(moviesJSON.length)
            return insertMovies(moviesJSON);
        } catch (error) {
          console.error(error).send({message:"We cannot get movies from API."})
        }
    },
    down: (queryInterface, Sequelize) => {}
};
