"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "voucher",
      [
        {
          userId: 1,
          storeId: 2,
          claimed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 1,
          claimed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          claimed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          storeId: 4,
          claimed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("voucher", null, {});
  },
};
