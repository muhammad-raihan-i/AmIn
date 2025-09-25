const { Company } = require("../models");
const { Op } = require("sequelize");
module.exports = class CompanyController {
  static async create(req, res, next) {
    try {
      console.log("try at CompanyController create");
      const object = req.body;
      object.OwnerId = req.owner.id;
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
      const data = await Company.findByPk(req.params.id);
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(200).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at CompanyController findOne");
      console.log(error);
      next(error);
    }
  }
  static async findAll(req, res, next) {
    try {
      console.log("try at CompanyController findAll");
      const data = await Company.findAll({
        where: {
          name: { [Op.iLike]: `%${req.query.name}%` }, //<--- ini buat search harusnya
        },
      });
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(200).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at CompanyController findAll");
      console.log(error);
      next(error);
    }
  }
  static async findMine(req, res, next) {
    try {
      console.log("try at CompanyController findMine");
      const data = await Company.findAll({
        where: {
          [Op.and]: [
            { OwnerId: req.owner.id },
            { name: { [Op.iLike]: `%${req.query.name}%` } }, //<--- ini buat search harusnya
          ],
        },
      });
      if (!data) {
        throw { message: "Not found" };
      }
      res.status(200).json({ message: "Find success", data });
    } catch (error) {
      console.log("error at CompanyController findMine");
      console.log(error);
      next(error);
    }
  }
  static async update(req, res, next) {
    try {
      console.log("try at CompanyController update");
      const data = await Company.findByPk(req.params.id);
      if (!data) {
        throw { message: "Not found" };
      }
      data.set(req.body);
      data.save();
      res.status(200).json({ message: "Update success", data });
    } catch (error) {
      console.log("error at CompanyController update");
      console.log(error);
      next(error);
    }
  }
};
