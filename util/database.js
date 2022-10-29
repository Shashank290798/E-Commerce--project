const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Shashank@143', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
