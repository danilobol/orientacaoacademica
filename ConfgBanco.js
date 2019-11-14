const Sequelize = require('sequelize')
const sequelize = new Sequelize('orientacaoufba', 'root', '010156aa', {
  host: "localhost",
  dialect: 'mysql'
})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso")
}).catch(function(erro){
  console.log("Falha ao se conectar: "+erro)
})

const Postagem = sequelize.define('postagens',{ //criando um model para postagens
  titulo:{
    type: Sequelize.STRING
  },
  conteudo:{
    type: Sequelize.TEXT
  }
})

//Postagem.sync({force: true})

Postagem.CREATE({
  titulo: "Oi danilo",
  conteudo: "dshgsdhsdhjsjhdsds"
})
