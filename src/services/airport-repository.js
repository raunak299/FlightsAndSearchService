const { AirportRepository } = require("../repository");
const CrudService = require("./crud-service");

class AirportService extends CrudService {
  constructor() {
    const airportRepository = new AirportRepository();
    super(airportRepository);
  }

  async getAll(data) {
    try {
      const result = await this.repository.getAll(data);
      return result;
    } catch (err) {
      console.log("something went wrong in airport service");
      throw err;
    }
  }
}

module.exports = AirportService;
