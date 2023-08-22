const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeapp', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;