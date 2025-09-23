'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Presence.init({
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    EmployeeId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Presence',
  });
  return Presence;
};