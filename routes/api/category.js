const router = require("express").Router();
const { categoryController } = require("../../controllers");

// Matches with '/api/category'
router
    .route("/")
    .get(categoryController.findAll)
    .post(categoryController.create)

// Matches with '/api/category:id'
router
    .route("/:id")
    .get(categoryController.findById)
    .put(categoryController.update)
    .delete(categoryController.remove);

module.exports = router;