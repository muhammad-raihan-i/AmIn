module.exports = class OwnerController {
  static async register(req, res, next) {
    try {
      console.log("try at OwnerController register");
    } catch (error) {
      console.log("error at OwnerController register");
      console.log(error);
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      console.log("try at OwnerController login");
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
