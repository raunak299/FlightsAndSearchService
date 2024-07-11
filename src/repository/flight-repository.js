const { Flights } = require("../models/index");
const CrudRepository = require("./crud-repository");
const { Op } = require("sequelize");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flights);
  }

  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.gte]: data.minPrice } },
    //       { price: { [Op.lte]: data.maxPrice } },
    //     ],
    //   });
    // }
    const priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
  }

  async getAll(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (err) {
      console.log("something went wrong in flight repository");
      throw err;
    }
  }
}

module.exports = FlightRepository;
