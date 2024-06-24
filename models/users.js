const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/conn');

const User = db.define('User', {
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nim: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  nip: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  judul_tugas_akhir: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nama_dosen: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bidang: {
    type: DataTypes.STRING,
    allowNull: true
  },
  gelar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fakultas: {
    type: DataTypes.STRING,
    allowNull: true
  },
  jurusan: {
    type: DataTypes.STRING,
    allowNull: true
  },
  jabatan: {
    type: DataTypes.STRING,
    allowNull: true
  },
  program_studi: {
    type: DataTypes.ENUM('S1', 'S2', 'S3'),
    allowNull: true
  },
  semester: {
    type: DataTypes.ENUM('', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  },
  email_verified_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  remember_token: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.ENUM('M', 'D', 'T'),
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
