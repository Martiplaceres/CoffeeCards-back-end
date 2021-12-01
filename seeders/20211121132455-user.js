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
          isStore: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Anton",
          email: "anton@a.com",
          password: bcrypt.hashSync("123anton", SALT_ROUNDS),
          isStore: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ana",
          email: "ana@ana.com",
          password: bcrypt.hashSync("123ana", SALT_ROUNDS),
          isStore: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lisa",
          email: "lisa@lisa.com",
          password: bcrypt.hashSync("123lisa", SALT_ROUNDS),
          isStore: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aleona",
          email: "a@a.com",
          password: bcrypt.hashSync("123aleona", SALT_ROUNDS),
          isStore: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lot61",
          email: "lot@61.com",
          password: bcrypt.hashSync("123lot", SALT_ROUNDS),
          isStore: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "White Label",
          email: "white@label.com",
          password: bcrypt.hashSync("123white", SALT_ROUNDS),
          isStore: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Back to black",
          email: "back@black.com",
          password: bcrypt.hashSync("123black", SALT_ROUNDS),
          isStore: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Italian place",
          email: "italy@coffee.com",
          password: bcrypt.hashSync("123italy", SALT_ROUNDS),
          isStore: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Moak",
          email: "moak@moak.com",
          password: bcrypt.hashSync("123moak", SALT_ROUNDS),
          isStore: true,
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
