const Sequelize = require('sequelize')
const sequelize = require('../postgres')

const Student = sequelize.define('student', {
  nome: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  cpf: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  registration: {
    type: Sequelize.STRING
  },
})

module.express = Student

const Orientation = require('./orientations')
Student.belongsToMany(Orientation, {through: 'created_by'});
