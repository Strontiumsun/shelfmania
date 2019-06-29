const router = require("express").Router();
const entryRoutes = require("./entry");
const searchRoutes = require("./search")

router.use("/entry", entryRoutes);
router.use("/search", searchRoutes);

module.exports = router;