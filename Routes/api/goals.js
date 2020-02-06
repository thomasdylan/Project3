const router = require("express").Router();
const goalsController = require("../../controllers/goalsController");

router.route("/")
    .get(goalsController.findAll)
    .post(goalsController.create);

router.route("/:user")
    .get(goalsController.findAll)
    .post(goalsController.create);

router
    .route("/:id")
    .get(goalsController.findById)
    .put(goalsController.update)
    .delete(goalsController.remove);

module.exports = router;
