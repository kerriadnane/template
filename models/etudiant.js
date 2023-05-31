'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class etudiant extends Model {
    
    static associate(models) {
      etudiant.belongsTo(models.groupe,{foreignKey:'id_groupe', as:'groupe'})
    }
  }
  etudiant.init({
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
    modelName: 'etudiant',
  });
  return etudiant;
};