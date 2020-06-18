const router = require("express").Router();
const userController = require("../controllers/userController");
const {auth, isAdmin} = require("../middleware/auth");

// router.get('/', auth, isAdmin, userController.getAll);
router.get("/", auth, userController.getAll);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.delete("/:id", userController.delete);

module.exports = router;
