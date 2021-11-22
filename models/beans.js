"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class beans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      beans.belongsToMany(models.store, {
        through: "storeBeans",
        foreignKey: "beansId",
      }),
        beans.hasMany(models.stamp);
    }
  }
  beans.init(
    {
      name: DataTypes.STRING,
      facts: DataTypes.STRING,
      history: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "beans",
    }
  );
  return beans;
};
