const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Entry.find({})
            .then(dbEntry => res.json(dbEntry))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Entry
            .create(req.body)
            .then(dbEntry => res.json(dbEntry))
            .catch(err => res.status(422).json(err));
    },
}
