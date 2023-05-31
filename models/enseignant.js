'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enseignant extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  enseignant.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    adresse: DataTypes.STRING,
    telephone: DataTypes.STRING,
    photo: DataTypes.STRING,
    idecole: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enseignant',
  });
  return enseignant;
};