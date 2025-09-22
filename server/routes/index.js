const express = require("express");
const route = express();
const OwnerController = require("../controllers/A_OwnerController.js");
const CompanyController = require("../controllers/B_CompanyController.js");
// const EmployeesController = require("../controllers/C_EmployeesController.js");
// const PresencesController = require("../controllers/D_PresencesController.js");

/*
mkdir controllers
touch controllers/OwnerController.js
touch controllers/CompanyController.js
touch controllers/EmployeesController.js
touch controllers/PresencesController.js
*/

route.get("/", function (request, response) {
  response.status(200).json({ message: "Ini back end" });
});
//hai aku dev
route.post("/owner-register", OwnerController.register);
route.post("/owner-login", OwnerController.login);
route.put("/owner-update", OwnerController.update);

module.exports = route;
