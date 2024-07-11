const { FlightRepository } = require("../repository");
const AirplaneRepository = require("../repository/airplane-repository");
const CrudService = require("./crud-service");
const { compareTime } = require("../utils/helper");

class FlightService extends CrudService {
  constructor() {
    const flightRepository = new FlightRepository();
    const airplaneRepository = new AirplaneRepository();
    super(flightRepository);
    this.airplaneRepository = airplaneRepository;
    this.flightRepository = flightRepository;
  }

  async create(data) {
    try {
      if (compareTime(data.arrivalTime, data.departureTime) != 1) {
        throw { error: "Arrival time cannot be less than departure" };
      }
      const airplane = await this.airplaneRepository.get(data.airplaneId);
      const flight = await this.flightRepository.create({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (err) {
      console.log("something went wrong in flight service");
      throw err;
    }
  }

  async getAll(data) {
    try {
      const result = await this.flightRepository.getAll(data);
      return result;
    } catch (err) {
      console.log("something went wrong in airport service");
      throw err;
    }
  }
}

module.exports = FlightService;
