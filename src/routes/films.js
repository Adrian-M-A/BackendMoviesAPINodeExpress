const router = require("express").Router();
const FilmController = require("../controllers/filmController");

router.get("/allFilms", FilmController.allFilms);
router.get("/filmsId/:id", FilmController.filmsId);
router.get("/filmsTitle", FilmController.filmsTitle);

module.exports = router;