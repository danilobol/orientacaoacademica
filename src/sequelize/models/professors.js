const Sequelize = require('sequelize')
const sequelize = require('../postgres')

const Professors = sequelize.define('professors', {
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
})

module.express = Professors

const Departments = require('./departments')
Professors.belongsToMany(Departments, {through: 'department_id'});
