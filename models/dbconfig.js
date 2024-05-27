const { Sequelize } = require('sequelize');
const {DataTypes} = Sequelize;


const dbconfig = new Sequelize('db_pweb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  try {
    dbconfig.authenticate();
    console.log('Connection has been established successfully.');   //tes koneksi
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = dbconfig;