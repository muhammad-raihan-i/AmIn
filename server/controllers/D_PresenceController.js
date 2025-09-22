module.exports = class PresenceController {
  static async create(req, res, next) {
    try {
      console.log("try at CompanyController create");
    } catch (error) {
      console.log("error at CompanyController create");
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
  static async delete(req, res, next) {
    try {
      console.log("try at CompanyController delete");
    } catch (error) {
      console.log("error at CompanyController delete");
      console.log(error);
      next(error);
    }
  }
};
