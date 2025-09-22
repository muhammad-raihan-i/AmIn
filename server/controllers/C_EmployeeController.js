module.exports = class EmployeeController {
  static async create(req, res, next) {
    try {
      console.log("try at EmployeeController create");
    } catch (error) {
      console.log("error at EmployeeController create");
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      console.log("try at EmployeeController login");
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
