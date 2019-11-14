const express = require("express");
const app = express();

//npm install --save express-handlebars
const handlebars = require('express-handlebars') //template end para usar estruturas condicionais e de repetição em html
const Sequelize = require('sequelize') //ajuda a trabalhar com banco de dados, pois abstrai todos os comandos do banco de dados


//confg
  //template engine, pega os layout na pasta views
    app.engine('handlebars', handlebars({defaultLayout: 'main'})) //main é o template padrão
    app.set('view engine', 'handlebars')

    //conexão com o banco de dados MySQl
    const sequelize = new Sequelize('orientacaoufba', 'root', '010156aa', {
      host: "localhost",
      dialect: 'mysql'
    })

    //rotas
    app.get('/cadastro', function(req, res){
      res.render('cadastro')
    })

    app.post('/enviar', function(req, res){ //rota acessada por requisição por metodo post
        res.send("FORMULARIO RECEBIDO!")
    })


app.listen(8081, function(){
  console.log("Servidor rodando!");
});
