const router = require("express").Router();
const entryController = require("../../controllers/entryController");

// api/entries/show
router.route("/show")
    .get(entryController.findAll)



