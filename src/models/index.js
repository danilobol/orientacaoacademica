const sequelize = require('./_database')

const models = {
  student: require('./students'),
  orientation: require('./orientations'),
  professor: require('./professors'),
  sequelize: sequelize
}

module.exports = models
