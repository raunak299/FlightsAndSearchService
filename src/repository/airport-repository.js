const { Airport } = require("../models/index");
const CrudRepository = require("./crud-repository");
const { Op } = require("sequelize");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airport);
  }

  async getAll(filter) {
    try {
      if (filter.name) {
        const result = await Airport.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return result;
      }
      const result = await this.model.findAll();
      return result;
    } catch (err) {
      console.log(err);
      console.log("Something went wrong in airport repo");
      throw err;
    }
  }
}

module.exports = AirportRepository;
