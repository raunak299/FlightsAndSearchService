const { Airplane } = require("../models/index");
const CrudRepository = require("./crud-repository");
const { Op } = require("sequelize");

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }

  async getAll(filter) {
    try {
      if (filter.modelNumber) {
        const result = await Airplane.findAll({
          where: {
            modelNumber: {
              [Op.startsWith]: filter.modelNumber,
            },
          },
        });
        return result;
      }
      const result = await this.model.findAll();
      return result;
    } catch (err) {
      console.log(err);
      console.log("Something went wrong in airplane repo");
      throw err;
    }
  }
}

module.exports = AirplaneRepository;
