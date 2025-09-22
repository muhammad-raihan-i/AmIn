module.exports = class EmployeeController {
  static async register(req, res, next) {
    try {
      console.log("try at EmployeeController register");
    } catch (error) {
      console.log("error at EmployeeController register");
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
