const { DataTypes } = require('sequelize');
const sequelize = require('../config/Sequelize');

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  idUsuario: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  dataHoraCadastro: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  codigo: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  cpfCnpj: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  cep: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  logradouro: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  numero: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  bairro: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  uf: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  complemento: {
    type: DataTypes.STRING(150),
    allowNull: true,
  },
  fone: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  limiteDeCredito: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  validade: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

Customer.sync()
.then(() => {
  console.log('Customer model synced');
})
.catch(err => {
  console.error('Error syncing Customer model:', err);
});

module.exports = Customer;
