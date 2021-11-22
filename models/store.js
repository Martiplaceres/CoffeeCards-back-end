"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      store.hasMany(models.user),
        store.hasMany(models.transactions),
        store.hasMany(models.stamps),
        store.belongsToMany(models.beans, {
          through: "storeBeans",
          foreignKey: "storeId",
        });
    }
  }
  store.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      stampLimit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "store",
    }
  );
  return store;
};
