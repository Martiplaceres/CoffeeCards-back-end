"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Martina",
          email: "mar@mar.com",
          password: bcrypt.hashSync("123mar", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anton",
          email: "anton@a.com",
          password: bcrypt.hashSync("123anton", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ana",
          email: "ana@ana.com",
          password: bcrypt.hashSync("123ana", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lisa",
          email: "lisa@lisa.com",
          password: bcrypt.hashSync("123lisa", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aleona",
          email: "a@a.com",
          password: bcrypt.hashSync("123aleona", SALT_ROUNDS),
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
