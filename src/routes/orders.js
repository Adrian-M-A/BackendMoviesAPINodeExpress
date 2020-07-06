const router = require("express").Router();
const orderController = require("../controllers/orderController");
const { auth } = require("../middleware/auth");

router.post("/create", auth, orderController.create);

module.exports = router;