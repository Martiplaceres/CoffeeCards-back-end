"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          name: "Lot 61",
          userId: 6,
          stampLimit: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Label",
          userId: 7,
          stampLimit: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Back to black",
          userId: 8,
          stampLimit: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italian place",
          userId: 9,
          stampLimit: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Moak",
          userId: 10,
          stampLimit: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null, {});
  },
};
