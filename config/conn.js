const Sequelize = require('sequelize');
const {DataTypes} = Sequelize;

const db = new Sequelize('db_pweb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    db.authenticate();
    console.log('Koneksi berhasil');
  } catch (error) {
    console.error('Tidak dapat koneksi ke database:', error);
  }
module.exports = db;
