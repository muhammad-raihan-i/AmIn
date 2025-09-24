const { Employee } = require("../models");
const { compare } = require("../helpers/bcrypt.js");
const { sign } = require("../helpers/jwt.js");
const { Op } = require("sequelize");
module.exports = class EmployeeController {
  static async create(req, res, next) {
    try {
      console.log("try at EmployeeController create");
      const data = await Employee.create(req.body);
      data.password = undefined;
      res.status(201).json({ message: "Register success", data });
    } catch (error) {
      console.log("error at EmployeeController create");
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      console.log("try at EmployeeController login");
      const { email, username, password } = req.body;
      const data = await Employee.findOne({
        where: { [Op.or]: [{ email }, { username }] },
      });
      if (!data) {
        throw { message: decline };
      }
      if (!compare(password, data.password)) {
        throw { message: decline };
      }
      data.password = undefined;
      const token = sign(data);
      res.status(200).json({ message: "Login success", data: token });
    } catch (error) {
      console.log("error at EmployeeController login");
      console.log(error);
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      console.log("try at EmployeeController findOne");
    } catch (error) {
      console.log("error at EmployeeController findOne");
      console.log(error);
      next(error);
    }
  }
  static async findAll(req, res, next) {
    try {
      console.log("try at EmployeeController findAll");
    } catch (error) {
      console.log("error at EmployeeController findAll");
      console.log(error);
      next(error);
    }
  }
  static async findByCompany(req, res, next) {
    try {
      console.log("try at EmployeeController findByCompany");
    } catch (error) {
      console.log("error at EmployeeController findByCompany");
      console.log(error);
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      console.log("try at EmployeeController update");
    } catch (error) {
      console.log("error at EmployeeController update");
      console.log(error);
      next(error);
    }
  }
};
