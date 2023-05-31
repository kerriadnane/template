'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groupe extends Model {
    static associate(models) {
      groupe.hasMany(models.etudiant,{foreignKey:'id_groupe', as:'etudiant'})
      groupe.belongsToMany(models.matiere,{through:'groupematiere'},{foreignKey:'groupe_id'},{as:'matieres'})
    }
  }
  groupe.init({
    designation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groupe',
  });
  return groupe;
};