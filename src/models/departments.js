const Sequelize = require('sequelize')
const sequelize = require('./_database')

const Departments = sequelize.define('departments', {
  name: {
    type: Sequelize.STRING
  },
})

module.exports = Departments
