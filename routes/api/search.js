const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// api/search/:query
router.route("/:query")
    .get(googleController.googleFind)
