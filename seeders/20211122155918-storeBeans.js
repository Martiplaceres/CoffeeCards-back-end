"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeBeans",
      [
        {
          beansId: 1,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 1,
          storeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 1,
          storeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 1,
          storeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 2,
          storeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 2,
          storeId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 3,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 3,
          storeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          beansId: 4,
          storeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storeBeans", null, {});
  },
};
