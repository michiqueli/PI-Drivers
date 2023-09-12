const axios = require ('axios')
const { Driver } = require('../db');

const getDrivers = async (req, res) => {
  try {
    const apiEndpoint = 'http://localhost:5000/drivers';

    // Obtén los conductores de la API
    const apiResponse = await axios.get(apiEndpoint);
    const apiDrivers = apiResponse.data;

    // Obtén los conductores de la base de datos utilizando Sequelize
    const dbDrivers = await Driver.findAll();

    // Combina los conductores de la API y de la base de datos
    const allDrivers = [...apiDrivers, ...dbDrivers];

    res.status(200).json(allDrivers);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

module.exports = getDrivers;