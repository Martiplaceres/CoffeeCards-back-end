"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "beans",
      [
        {
          name: "Brazil",
          facts: "some facts about brazilian coffee",
          history: "some history about brazilian coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Peru",
          facts: "some facts about peruvian coffee",
          history: "some history about peruvian coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vietnam",
          facts: "some facts about vietnam coffee",
          history: "some history about vietnam coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Indonesia",
          facts: "some facts about indonesian coffee",
          history: "some history about indonesian coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "India",
          facts: "some facts about indian coffee",
          history: "some history about indian coffee",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("beans", null, {});
  },
};
