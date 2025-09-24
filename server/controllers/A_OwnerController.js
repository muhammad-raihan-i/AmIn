const { Owner } = require("../models");
const { compare } = require("../helpers/bcrypt.js");
const { sign } = require("../helpers/jwt.js");
const { Op } = require("sequelize");
const decline = "Invalid username/email or password";
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
      const { email, username, password } = req.body;
      const data = await Owner.findOne({
        where: { [Op.or]: [{ email }, { username }] },
      });
      if (!data) {
        throw { message: decline };
      }
      if (!compare(password, data.password)) {
        throw { message: decline };
      }
      data.password = "undefined";
      const token = sign(data);
      res.status(200).json({ message: "Login success", data: token });
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
