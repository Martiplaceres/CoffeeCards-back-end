"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      voucher.belongsTo(models.store);
      voucher.belongsTo(models.user);
    }
  }
  voucher.init(
    {
      claimed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "voucher",
    }
  );
  return voucher;
};
