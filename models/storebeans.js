"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class storeBeans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.store), this.belongsTo(models.beans);
    }
  }
  storeBeans.init(
    {
      beansId: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "storeBeans",
    }
  );
  return storeBeans;
};
