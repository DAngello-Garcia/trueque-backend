"use strict";

/** @type {import('sequelize-cli').Seeder} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { tableName: "User", schema: "public" },
      [
        {
          name: "John Doe",
          email: "john@example.com",
          password:
            "$2b$10$b7EZvzuRx1rzVTg309leiu4M4nXGyxvm21CFRxPWA/bI1MDXnDqzm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jane Smith",
          email: "jane@example.com",
          password:
            "$2b$10$b7EZvzuRx1rzVTg309leiu4M4nXGyxvm21CFRxPWA/bI1MDXnDqzm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { tableName: "User", schema: "public" },
      null,
      {}
    );
  },
};
