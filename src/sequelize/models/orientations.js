const Sequelize = require('sequelize')
const sequelize = require('../_database')


const Orientations = sequelize.define('orientations', {
  observations: {
    type: Sequelize.TEXT
  },
  pending: {
    type: Sequelize.BOOLEAN
  },
})
module.exports = Orientations

const Student = require('./students')
const Professors = require('./professors')
Orientation.belongsToMany(Student, {through: 'aluno_orientacao'});
Orientation.belongsToMany(Professors, {through: 'professors_orientacao'});
