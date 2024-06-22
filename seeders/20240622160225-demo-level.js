"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: "Level", schema: "public" },
      [
        {
          name: "Beginner",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Intermediate",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Advanced",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: "Level", schema: "public" },
      null,
      {}
    );
  },
};
