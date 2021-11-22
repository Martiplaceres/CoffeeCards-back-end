"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stamps extends Model {
    static associate(models) {
      this.belongsTo(models.user),
        this.belongsTo(models.store),
        this.belongsTo(models.beans);
    }
  }
  stamps.init(
    {
      quantity: DataTypes.INTEGER,
      voucher: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "stamps",
    }
  );
  return stamps;
};
