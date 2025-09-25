const { Employee } = require("../models");
const { Presence } = require("../models");
module.exports = class PresenceController {
  static async create(req, res, next) {
    try {
      console.log("try at PresenceController create");
      const object = req.body;
      object.EmployeeId = req.employee.id;
      const data = await Employee.create(object);
      res.status(201).jwt({ message: "Create success", data });
    } catch (error) {
      console.log("error at PresenceController create");
      console.log(error);
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      console.log("try PresenceController findOne");
      const data = await Presence.findByPk(req.params.id);
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(200).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at PresenceController findOne");
      console.log(error);
      next(error);
    }
  }
  static async findAll(req, res, next) {
    try {
      console.log("try PresenceController findAll");
      const data = await Presence.findAll({ include: Employee });
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(200).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at PresenceController findAll");
      console.log(error);
      next(error);
    }
  }
  static async findMine(req, res, next) {
    try {
      console.log("try PresenceController findMine");
      const data = await Employee.findAll(req.params.id);
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(200).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at PresenceController findMine");
      console.log(error);
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      console.log("try at PresenceController update");
    } catch (error) {
      console.log("error at PresenceController update");
      console.log(error);
      next(error);
    }
  }
  static async delete(req, res, next) {
    try {
      console.log("try at PresenceController delete");
    } catch (error) {
      console.log("error at PresenceController delete");
      console.log(error);
      next(error);
    }
  }
};
