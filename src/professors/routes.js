const express = require("express");
const Professors = require("./model");

const router = express.Router();

router.route("/")
    .get((req, res, next) => {
        const { limit = 20, offset = 0 } = req.query;

        const users = Professors.getAll(offset, limit);

        res.json(users);
    })
    .post((req, res, next) => {
        const professors = req.body;

        const newProfessors = Professors.create(professors);

        res.json(newProfessors);
    });

module.exports = router;
