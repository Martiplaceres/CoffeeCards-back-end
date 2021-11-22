"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          name: "Lot61",
          email: "lot@61.com",
          password: "123lot",
          stampLimit: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Label",
          email: "white@label.com",
          password: "123white",
          stampLimit: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Back to black",
          email: "back@black.com",
          password: "123back",
          stampLimit: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italian place",
          email: "italy@coffee.com",
          password: "123italy",
          stampLimit: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Moak",
          email: "moak@moak.com",
          password: "123moak",
          stampLimit: 6,
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
