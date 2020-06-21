const {Film} = require("../models")

const FilmController = {
    allFilms(req,res){
        Film.findAll({})
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
        Film.findOne({
            where:{
                Title: req.body.Title
            }
        })
        .then(films => res.send(films))
        .catch(error => {
            console.error(error);
            res.status(500).send({message:"There was a problem trying to get films by title."});
        })
    }
}
module.exports = FilmController;