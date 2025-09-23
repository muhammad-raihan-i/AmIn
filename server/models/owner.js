"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Owner.init(
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Fullname required" },
          notEmpty: { msg: "Fullname required" },
        },
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Nickname required" },
          notEmpty: { msg: "Nickname required" },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Username required" },
          notEmpty: { msg: "Username required" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Email required" },
          notEmpty: { msg: "Email required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password required" },
          notEmpty: { msg: "Password required" },
        },
      },
      imageUrl: DataTypes.TEXT,
      bio: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Owner",
    }
  );
  return Owner;
};
