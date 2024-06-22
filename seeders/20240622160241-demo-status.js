"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: "Status", schema: "public" },
      [
        {
          name: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Approved",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rejected",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: "Status", schema: "public" },
      null,
      {}
    );
  },
};
