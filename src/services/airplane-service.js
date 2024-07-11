const { AirplaneRepository } = require("../repository");
const CrudService = require("./crud-service");

class AirplaneService extends CrudService {
  constructor() {
    const airplaneRepository = new AirplaneRepository();
    super(airplaneRepository);
  }

  async getAll(data) {
    try {
      const result = await this.repository.getAll(data);
      return result;
    } catch (err) {
      console.log("something went wrong in crud service");
      throw err;
    }
  }
}

module.exports = AirplaneService;
