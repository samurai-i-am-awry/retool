const router = require("express").Router();
const toolController = require("../../controllers/toolController");

// Matches with "/api/books"
router.route("/")
  .get(toolController.findAll)
  .post(toolController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(toolController.findById)
  .put(toolController.update)
  .delete(toolController.remove);

module.exports = router;
