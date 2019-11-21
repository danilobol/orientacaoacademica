const express = require("express");
const studentRouter = require("./student/routes");
const professorsRouter = require("./professors/routes");

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("students", studentRouter);
app.use("professors", professorsRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
