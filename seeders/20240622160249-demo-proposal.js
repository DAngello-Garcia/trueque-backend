"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: "Proposal", schema: "public" },
      [
        {
          title: "New Website",
          description: "Proposal for new company website",
          statusId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mobile App",
          description: "Proposal for mobile application",
          statusId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: "Proposal", schema: "public" },
      null,
      {}
    );
  },
};
