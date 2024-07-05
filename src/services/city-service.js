const CityRepository = require("../repository/city-repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (err) {
      throw err;
    }
  }

  async deleteCity(data) {
    try {
      const response = await this.cityRepository.deleteCity(data);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (err) {
      throw err;
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (err) {
      throw err;
    }
  }

  async getAllCities() {
    try {
      const city = await this.cityRepository.getAllCities();
      return city;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CityService;
