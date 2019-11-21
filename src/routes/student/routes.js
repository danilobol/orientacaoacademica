const express = require("express");
const Student = require("./model");



const router = express.Router();

router.route("/")
    .get((req, res, next) => {
        const { limit = 20, offset = 0 } = req.query;

        const users = Student.getAll(offset, limit);

        res.json(users);
    })
    .post((req, res, next) => {
        const student = req.body;

        const newStudent = Student.create(student);

        res.json(newStudent);
    });



module.exports = router;
