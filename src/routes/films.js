const router = require("express").Router();
const FilmController = require("../controllers/filmController");

router.get("/allFilms", FilmController.allFilms);
router.get("/filmsId/:id", FilmController.filmsId);
router.get("/filmsTitle/:title", FilmController.filmsTitle);
router.get("/popularfilms", FilmController.popularFilms)
router.get("/votedfilms", FilmController.votedFilms)
router.get("/eightyfilms", FilmController.eightyFilms)
router.get("/ninetyfilms", FilmController.ninetyFilms)
router.get("/zgenerationfilms", FilmController.zGenerationFilms)

module.exports = router;