const router = require("express").Router();
const userController = require("../controllers/userController");
const {auth} = require("../middleware/auth");

router.get("/profile", auth, userController.profile);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.delete("/drop", auth, userController.delete);

module.exports = router;
