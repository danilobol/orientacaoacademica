const Sequelize = require('sequelize')
const sequelize = require('./_database')

const Professors = sequelize.define('professors', {
  nome: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  cpf: {
    type: Sequelize.TEXT
  },
  password: {
    type: Sequelize.TEXT
  },
})

module.exports = Professors
