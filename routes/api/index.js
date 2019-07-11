const router = require("express").Router();
const path = require("path");
const entryRoutes = require("./entry");
const searchRoutes = require("./search")

router.use("/entries", entryRoutes);
router.use("/search", searchRoutes);

// For anything else, render the html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;