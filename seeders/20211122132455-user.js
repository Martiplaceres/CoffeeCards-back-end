"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Martina",
          email: "mar@mar.com",
          password: "123mar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anton",
          email: "anton@a.com",
          password: "123anton",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ana",
          email: "ana@ana.com",
          password: "123ana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lisa",
          email: "lisa@lisa.com",
          password: "123lisa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aleona",
          email: "a@a.com",
          password: "123aleona",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
