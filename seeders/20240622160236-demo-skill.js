"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: "Skill", schema: "public" },
      [
        {
          name: "JavaScript",
          description: "Programming language",
          levelId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Python",
          description: "Programming language",
          levelId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cooking",
          description: "Steak, chicken",
          levelId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: "Skill", schema: "public" },
      null,
      {}
    );
  },
};
