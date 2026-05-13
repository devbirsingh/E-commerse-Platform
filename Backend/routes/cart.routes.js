const router = require("express").Router();
const controller = require("../controllers/cart.controller");

router.get("/", controller.getCart);
router.post("/", controller.addOrRemove);

module.exports = router;