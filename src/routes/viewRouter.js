const express = require("express");
const router = express.Router();


router.get("/",(req,res) =>{
  res.render('usuarios login') //local da view login
})
