const db = require("../models");

module.exports = {
    create: function(req, res) {
        db.Users
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // update: function(req, res) {
    //     db.Users
    //         .findOneAndUpdate({ _id: req.params.id}, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
};