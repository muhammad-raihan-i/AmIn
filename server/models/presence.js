"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Presence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Presence.belongsTo("Employees", { foreignKey: "EmployeeId" });
    }
  }
  Presence.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Type required" },
          notEmpty: { msg: "Type required" },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Status required" },
          notEmpty: { msg: "Status required" },
        },
      },
      EmployeeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Presence",
    }
  );
  return Presence;
};
