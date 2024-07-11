const { AirplaneService } = require("../services");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const airplane = await airplaneService.create(req.body);
    return res.status(201).json({
      data: airplane,
      success: true,
      message: "Successfully created a airplane",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a airplane",
      err: err,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await airplaneService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a airplane",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete a airplane",
      err: err,
    });
  }
};

const get = async (req, res) => {
  try {
    const airplane = await airplaneService.get(req.params.id);
    return res.status(200).json({
      data: airplane,
      success: true,
      message: "Successfully fetched a airplane",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get a airplane",
      err: err,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airplaneService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated a airplane",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update a airplane",
      err: err,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await airplaneService.getAll(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched all airplanes",
      err: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get airplane",
      err: err,
    });
  }
};

// const create = async (req, res) => {
//   try {
//     const cities = await cityService.createCities(req.body);
//     return res.status(200).json({
//       data: cities,
//       success: true,
//       message: "Successfully created cities",
//       err: {},
//     });
//   } catch (err) {
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "Not able to create cities",
//       err: err,
//     });
//   }
// };

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  //   createCities,
};
