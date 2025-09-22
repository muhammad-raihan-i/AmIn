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
  static async read(req, res, next) {
    try {
      console.log("try at EmployeeController read");
    } catch (error) {
      console.log("error at EmployeeController read");
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
