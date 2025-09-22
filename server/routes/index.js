const express = require("express");
const route = express();
const OwnerController = require("../controllers/A_OwnerController.js");
const CompanyController = require("../controllers/B_CompanyController.js");
const EmployeeController = require("../controllers/C_EmployeeController.js");
const PresenceController = require("../controllers/D_PresenceController.js");

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

route.post("/owners/register", OwnerController.register);
route.post("/owners/login", OwnerController.login);
route.put("/owners/update", OwnerController.update);

route.post("/companies/create", CompanyController.create);
route.get("/companies/findOne", CompanyController.findOne);
route.get("/companies/findAll", CompanyController.findAll);
route.get("/companies/findMine", CompanyController.findMine);
route.put("/companies/update", CompanyController.update);

route.post("/employees/create", EmployeeController.create);
route.get("/employees/login", EmployeeController.login);
route.get("/employees/findOne", EmployeeController.findOne);
route.get("/employees/findAll", EmployeeController.findAll);
route.get("/employees/findByCompany", EmployeeController.findByCompany);
route.put("/employees/update", EmployeeController.update);

route.post("/presences/create", PresenceController.create);
route.get("/presences/findOne", PresenceController.findOne);
route.get("/presences/findAll", PresenceController.findAll);
route.get("/presences/findMine", PresenceController.findMine);
route.put("/presences/update", PresenceController.update);
route.delete("/presences/update", PresenceController.delete);

module.exports = route;
