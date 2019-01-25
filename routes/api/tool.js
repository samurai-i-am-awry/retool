const router = require("express").Router();
const toolsController = require("../../controllers/toolsController");

// Matches with "/api/books"
router
  .route("/")
  .get(toolsController.findAll)
  .post(toolsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(toolsController.findById)
  .put(toolsController.update)
  .delete(toolsController.remove);

module.exports = router;
