"use strict";
let data = require("./data/owners.json");
const { hash } = require("./helpers/bcrypt.js");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data = JSON.parse(data);
    data.map((e) => {
      e.password = hash(e.password);
      e.createdAt = new Date();
      e.updatedAt = new Date();
      return e;
    });
    await queryInterface.bulkInsert("Owners", data);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Owners");
  },
};
