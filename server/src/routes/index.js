const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers")
const getTeams = require ("../controllers/getTeams")
const getDriverById = require ("../controllers/getDriverById");
const{ getDriverByName} = require("../controllers/getDriverByName");
const {createDriver} = require("../controllers/createDriver");

const router = Router();

router.get("/drivers", getDrivers)
router.get("/drivers/name/:name", getDriverByName)
router.get("/drivers/:idDriver", getDriverById)
router.get("/teams", getTeams)
router.post("/drivers", createDriver)


module.exports = router;
