const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Entry.find({})
            .then(dbEntry => res.json(dbEntry))
            .catch(err => res.status(422).json(err));
    }
}
