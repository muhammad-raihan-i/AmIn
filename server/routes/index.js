const express = require("express");
const route = express();
const OwnerController = require("../controllers/A_OwnerController.js");
const CompanyController = require("../controllers/B_CompanyController.js");
const EmployeeController = require("../controllers/C_EmployeeController.js");
// const PresenceController = require("../controllers/D_PresencesController.js");

/*
mkdir controllers
touch controllers/OwnerController.js
touch controllers/CompanyController.js
touch controllers/EmployeesController.js
touch controllers/PresencesController.js
*/

route.get("/", function (request, response) {
  response.status(200).json({ message: "Ini backend AmIn (iAmIn)" });
});

route.post("/owner/register", OwnerController.register);
route.post("/owner/login", OwnerController.login);
route.put("/owner/update", OwnerController.update);

route.post("/company/create", CompanyController.create);
route.get("/company/findOne", CompanyController.findOne);
route.get("/company/findAll", CompanyController.findAll);
route.get("/company/findMine", CompanyController.findMine);
route.put("/company/update", CompanyController.update);

route.post("/employees/create", EmployeeController.create);
route.get("/employees/login", EmployeeController.login);
route.get("/employees/findOne", EmployeeController.findOne);
route.get("/employees/findAll", EmployeeController.findAll);
route.get("/employees/findByCompany", EmployeeController.findByCompany);
route.put("/employees/update", EmployeeController.update);

module.exports = route;
