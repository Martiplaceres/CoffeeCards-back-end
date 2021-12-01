"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    static associate(models) {
      transaction.belongsTo(models.user),
        transaction.belongsTo(models.store),
        transaction.belongsTo(models.bean);
    }
  }
  transaction.init(
    {
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "transaction",
    }
  );
  return transaction;
};
