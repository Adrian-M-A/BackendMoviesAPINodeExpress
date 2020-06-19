const router = require("express").Router();
const adminController = require("../controllers/adminController");
const {auth, isAdmin} = require("../middleware/auth");

// router.get('/', auth, isAdmin, userController.getAll);
router.get("/getOrders", auth, isAdmin, adminController.getOrders);
router.delete("/deleteOrders", auth, isAdmin, adminController.deleteOrder);

module.exports = router;