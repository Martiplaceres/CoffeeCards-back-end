"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stamps",
      [
        {
          userId: 1,
          storeId: 1,
          beansId: 2,
          quantity: 1,
          voucher: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          storeId: 2,
          beansId: 1,
          quantity: 2,
          voucher: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 1,
          beansId: 3,
          quantity: 5,
          voucher: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 4,
          beansId: 4,
          quantity: 5,
          voucher: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stamps", null, {});
  },
};
