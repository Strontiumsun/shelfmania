const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// api/entries/
router.route("/")
    .get(entryController.findAll)
    .post(entryController.create)

module.exports = router;
