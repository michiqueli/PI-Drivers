const axios = require ('axios')
const { Driver } = require('../db');

const getDrivers = async (req, res) => {
  try {
    const apiEndpoint = 'http://localhost:5000/drivers';
    const apiResponse = await axios.get(apiEndpoint);
    const apiDrivers = apiResponse.data;
    const dbDrivers = await Driver.findAll();
    const allDrivers = [...apiDrivers, ...dbDrivers];
    res.status(200).json(allDrivers);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

module.exports = getDrivers;