const express = require("express");
const Orientation = require("./model");



const router = express.Router();

router.route("/")
    .get((req, res, next) => {
        const { limit = 20, offset = 0 } = req.query;

        const help = Orientation.getAll(offset, limit);

        res.json(help);
    })
    .post((req, res, next) => {
        const help = req.body;

        const newHelp = Orientation.create(help);

        res.json(newHelp);
    });



module.exports = router;
