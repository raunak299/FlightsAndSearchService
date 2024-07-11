const { AirportService } = require("../services");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Successfully created a airport",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a airport",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airportService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a airport",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a airport",
      err: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const airport = await airportService.get(req.params.id);
    return res.status(200).json({
      data: airport,
      success: true,
      message: "Successfully fetched a airport",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a airport",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airportService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a airport",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a airport",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await airportService.getAll(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched all airport",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get airport",
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
  //   createCities,
};
