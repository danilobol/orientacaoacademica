const Sequelize = require('sequelize')
const sequelize = require('./_database')

const Student = sequelize.define('students', {
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
  registration: {
    type: Sequelize.TEXT
  },
})

module.exports = Student

//const Orientations = require('./orientations')
//Student.belongsToMany(Orientations, {through: 'aluno_orientacao'});
