'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matiere extends Model {
    
    static associate(models) {
      matiere.belongsToMany(models.groupe,{through:'groupematiere'}, {foreignKey:'matiere_id'}, {as:'groupes'})
    }
  }
  matiere.init({
    designation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matiere',
  });
  return matiere;
};