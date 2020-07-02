const {Film} = require("../models");
const { Op } = require("sequelize");

const FilmController = {
    allFilms(req,res){
        Film.findAll({
            limit:100
        })
        .then(films => res.send(films))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get all the films."});
        })
    },
    filmsId(req,res){
        const { id } = req.params;
        Film.findOne({
            where: {
                id: id
            }
        })
        .then(films => res.send(films))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get films by Id."});
        })
    },
    filmsTitle(req,res){
        const { title } = req.params;
        Film.findAll({
            where:{
                Title: {
                [Op.regexp]:`.*${title}.*`
                }
            },
            limit: 30
        })
        .then(films => res.send(films))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get films by title."});
        })
    },

    async popularFilms(req,res){
        try {
            const popular = await Film.findAll({
                where: {
                    Popularity:{
                    [Op.gte]: 50
                    }
                }
            });
            res.status(201).send(popular)
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get popular films."})
        }
    },
    async votedFilms(req,res){
        try {
            const voted = await Film.findAll({
                where: {
                    VoteAverage:{
                    [Op.gte]: 8.5
                    }
                }
            });
            res.status(201).send(voted)
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get voted films."})
        }
    },
    async eightyFilms(req,res){
        try {
            const eighty = await Film.findAll({
                where: {
                    ReleaseDate:{
                    [Op.between]: ["1980-01-01", "1989-12-31"]
                    }
                }
            });
            res.status(201).send(eighty)
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get voted films."})
        }
    },
    async ninetyFilms(req,res){
        try {
            const ninety = await Film.findAll({
                where: {
                    ReleaseDate:{
                    [Op.between]: ["1990-01-01", "1999-12-31"]
                    }
                }
            });
            res.status(201).send(ninety)
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get voted films."})
        }
    },
    async zGenerationFilms(req,res){
        try {
            const millennial = await Film.findAll({
                where: {
                    ReleaseDate:{
                    [Op.gt]: "2000-01-01"
                    }
                }
            });
            res.status(201).send(millennial)
            
        } catch (error) {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get voted films."})
        }
    }

}
module.exports = FilmController;