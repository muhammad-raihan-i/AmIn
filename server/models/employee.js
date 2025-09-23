'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    fullname: DataTypes.STRING,
    nickname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    bio: DataTypes.TEXT,
    role: DataTypes.STRING,
    CompanyId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};