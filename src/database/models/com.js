'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class com extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  com.init({
    company_id: DataTypes.STRING,
    company_name: DataTypes.STRING,
    company_sector: DataTypes.STRING,
    company_description: DataTypes.STRING,
    ceo: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'com',
  });
  return com;
};