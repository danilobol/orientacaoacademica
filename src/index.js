const express = require("express");
const studentRouter = require("./routes/student/routes");
const professorsRouter = require("./routes/professors/routes");
const helpRouter = require("./routes/help/routes");
const viewsRouter = require("./routes/viewRouter");
const bodyParser = require("body-parser")
const passport = require("passport")
require("./config/auth")(passport)

app.use(passaport.initialize())
app.use(passaport.session())

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//rotas
//app.use("/oi",viewRouter);
app.use("/help", helpRouter);
app.use("/students", studentRouter);
app.use("/professors", professorsRouter);


//outros
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
