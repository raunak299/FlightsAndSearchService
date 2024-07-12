const express = require("express");
const CityController = require("../../controllers/city-controller");
const flightController = require("../../controllers/flight-controller");
const AirplaneController = require("../../controllers/airplane-controller");
const AirportController = require("../../controllers/airport-controller");
const { flightMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.patch("/city/:id", CityController.update);
router.get("/city", CityController.getAll);
router.post("/cities", CityController.createCities);

router.post(
  "/flights",
  flightMiddlewares.validateCreateFlight,
  flightController.create
);
router.delete("/flights/:id", flightController.destroy);
router.get("/flights/:id", flightController.get);
router.patch("/flights/:id", flightController.update);
router.get("/flights", flightController.getAll);

router.post("/airplanes", AirplaneController.create);
router.delete("/airplanes/:id", AirplaneController.destroy);
router.get("/airplanes/:id", AirplaneController.get);
router.patch("/airplanes/:id", AirplaneController.update);
router.get("/airplanes", AirplaneController.getAll);

router.post("/airports", AirportController.create);
router.delete("/airports/:id", AirportController.destroy);
router.get("/airports/:id", AirportController.get);
router.patch("/airports/:id", AirportController.update);
router.get("/airports", AirportController.getAll);

module.exports = router;
