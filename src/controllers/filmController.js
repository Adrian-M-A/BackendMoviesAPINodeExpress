const {film} = require("../models")

const filmController = {
    allFilms(req,res){
        film.findAll({})
        .then(films => res.send(films))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get all the films."});
        })
    },
    filmsId(req,res){
        film.findAll(req.body,  {
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
        film.findAll(req.body, {
            where:{
                Title
            }
        })
        .then(films => res.send(films))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get films by title."});
        })
    }
}
module.exports = filmController;