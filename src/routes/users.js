const router = require("express").Router();
const userController = require("../controllers/userController");
const {auth, isAdmin} = require("../middleware/auth");

router.get("/profile", auth, userController.profile);
router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.delete("/drop", auth, isAdmin, userController.delete);
router.get("/logout", auth, userController.logout);
router.put("/update", auth, userController.update);

module.exports = router;
