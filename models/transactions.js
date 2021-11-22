"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    static associate(models) {
      this.belongsTo(models.user), this.belongsTo(models.store);
    }
  }
  transactions.init(
    {
      quantity: DataTypes.STRING,
      freeCoffee: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "transactions",
    }
  );
  return transactions;
};
