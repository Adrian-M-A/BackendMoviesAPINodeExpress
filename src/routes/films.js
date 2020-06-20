const router = require("express").Router();
const filmController = require("../controllers/filmController");

router.get("/allFilms", filmController.allFilms);
router.get("/filmsId", filmController.filmsId);
router.get("/filmsTitle", filmController.filmsTitle);

module.exports = router;