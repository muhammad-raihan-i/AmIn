const { Owner } = require("../models");
const { sign } = require("../helpers/jwt.js");
module.exports = class OwnerController {
  static async register(req, res, next) {
    try {
      console.log("try at OwnerController register");
      const data = await Owner.create(req.body);
      data.password = undefined;
      res.status(201).json({ message: "Register success", data });
    } catch (error) {
      console.log("error at OwnerController register");
      console.log(error);
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      console.log("try at OwnerController login");
      const data = await Owner.findOne({ where: { email: req.body.email } });
    } catch (error) {
      console.log("error at OwnerController login");
      console.log(error);
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      console.log("try at OwnerController update");
    } catch (error) {
      console.log("error at OwnerController update");
      console.log(error);
      next(error);
    }
  }
};
