const CityService = require("../services/city-service");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a city",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a city",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await cityService.getAllCities(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get cities",
      err: err,
    });
  }
};

const createCities = async (req, res) => {
  try {
    const cities = await cityService.createCities(req.body);
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully created cities",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create cities",
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  createCities,
};
