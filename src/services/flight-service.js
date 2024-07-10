const { FlightRepository, AirplaneRepository } = require("../repository");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      if (compareTime(data.arrivalTime, data.departureTime) != 1) {
        throw { error: "Arrival time cannot be less than departure" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (err) {
      console.log("something went wrong in flight service");
      throw err;
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (err) {
      console.log("something went wrong in flight service");
      throw err;
    }
  }
}

module.exports = FlightService;
