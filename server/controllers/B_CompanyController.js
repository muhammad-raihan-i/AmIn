const { Company } = require("../models");
module.exports = class CompanyController {
  static async create(req, res, next) {
    try {
      console.log("try at CompanyController create");
      const object = req.body;
      object.OwnerId = req.user.id;
      const data = await Company.create(object);
      res.status(201).json({ message: "Create success", data });
    } catch (error) {
      console.log("error at CompanyController create");
      console.log(error);
      next(error);
    }
  }

  static async findOne(req, res, next) {
    try {
      console.log("try at CompanyController findOne");
      const data = await Company.findOne(req.params.id);
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(201).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at CompanyController findOne");
      console.log(error);
      next(error);
    }
  }
  static async findAll(req, res, next) {
    try {
      console.log("try at CompanyController findAll");
    } catch (error) {
      console.log("error at CompanyController findAll");
      console.log(error);
      next(error);
    }
  }

  static async findMine(req, res, next) {
    try {
      console.log("try at CompanyController findMine");
    } catch (error) {
      console.log("error at CompanyController findMine");
      console.log(error);
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      console.log("try at CompanyController update");
    } catch (error) {
      console.log("error at CompanyController update");
      console.log(error);
      next(error);
    }
  }
};
