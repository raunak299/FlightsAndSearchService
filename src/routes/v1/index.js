const express = require("express");
const CityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.post("/cities", CityController.createCities);

router.post("/flights", flightController.create);
router.get("/flights", flightController.getAll);

module.exports = router;
