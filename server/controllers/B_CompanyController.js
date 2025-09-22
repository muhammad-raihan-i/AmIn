module.exports = class CompanyController {
  static async create(req, res, next) {
    try {
      console.log("try at CompanyController create");
    } catch (error) {
      console.log("error at CompanyController create");
      console.log(error);
      next(error);
    }
  }
  static async findOne(req, res, next) {
    try {
      console.log("try at CompanyController findOne");
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
