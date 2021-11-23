"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bean.hasMany(models.transaction);
    }
  }
  bean.init(
    {
      name: DataTypes.STRING,
      facts: DataTypes.STRING,
      history: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "bean",
    }
  );
  return bean;
};
