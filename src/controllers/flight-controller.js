const { FlightService } = require("../services");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    let flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.create(flightRequestData);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Successfully created a flight",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAll(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the flights",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the flights",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await flightService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a flight",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a flight",
      err: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const flight = await flightService.get(req.params.id);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "Successfully fetched a flight",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a flight",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await flightService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a flight",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a flight",
      err: err,
    });
  }
};

module.exports = {
  create,
  getAll,
  destroy,
  get,
  update,
};
