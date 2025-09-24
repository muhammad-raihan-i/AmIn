"use strict";
const data = require("./data/owners.json");
const { hash } = require("./helpers/bcrypt.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Owners", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Owners");
  },
};
