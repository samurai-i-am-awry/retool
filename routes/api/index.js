const router = require("express").Router();
const toolRoutes = require("./tool");
const toolsController = require("../../controllers/toolsController");


// Book routes
router.use("/tool", toolRoutes);

module.exports = router;
