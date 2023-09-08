const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers")
const getDriverById = require ("../controllers/getDriverById");
const getDriverByName = require("../controllers/getDriverByName");

const router = Router();

router.get("/drivers", getDrivers)
router.get("/drivers/:idDriver", getDriverById)
router.get("/drivers/name?=", getDriverByName)


module.exports = router;
