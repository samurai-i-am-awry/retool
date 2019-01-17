const router = require("express").Router();
const toolRoutes = require("./tool");

// Book routes
router.use("/tool", toolRoutes);

module.exports = router;
