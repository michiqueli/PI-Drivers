const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers")
const getDriverById = require ("../controllers/getDriverById");
const {getDriverByName} = require("../controllers/getDriverByName");
const { createDriver } = require("../controllers/createDriver");
const { getTeams } = require("../controllers/getTeams")

const router = Router();

router.get("/drivers", getDrivers)
router.get("/drivers/:idDriver", getDriverById)
router.get("/drivers?name=", getDriverByName)
router.post("/drivers", createDriver)
//router.get("/teams", getTeams)


module.exports = router;
