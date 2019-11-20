const Sequelize = require('sequelize')
const sequelize = require('../_database')

const Orientation = sequelize.define('orientations', {
  observations: {
    type: Sequelize.STRING
  },
  pending: {
    type: Sequelize.BOOLEAN
  },
})

module.exports = Orientation

const student = require('./student')
const professors = require('./professors')
Orientation.belongsToMany(student, {through: 'created_by'});
Orientation.belongsToMany(professors, {through: 'oriented_by'});
