const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with '/api/menu'
router
    .route("/")
    .get(menuController.findAll)
    .post(menuController.create)
    // .post(menuController.createCategory);

// Matches with '/api/menu/:id'
router
    .route("/:id")
    .get(menuController.findById)
    .put(menuController.update)
    .delete(menuController.remove);

// Matches with '/api/menu/category'
router
    .route("/category")
    .get(menuController.findAllCategories)
    .post(menuController.createCategory)

// Matches with '/api/menu/category:id'
router
    .route("/category/:id")
    .get(menuController.findCategoryById)
    .put(menuController.updateCategory)
    .delete(menuController.removeCategory);


module.exports = router;
