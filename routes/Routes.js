const router = require("express").Router();
const imageController = require("../controllers/imageControllers");

router.get("/getimage/:item", imageController.image_get);

module.exports = router;
