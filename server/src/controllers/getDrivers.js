const axios = require ('axios')
const { Driver, Team } = require('../db');

const getDrivers = async (req, res) => {
  try {
    const apiEndpoint = 'http://localhost:5000/drivers';
    const apiResponse = await axios.get(apiEndpoint);
    const apiDrivers = apiResponse.data.map((driver) => {
                return {
                id : driver.id,
                name : driver.name.forename,
                lastname : driver.name.surname,
                nationality : driver.nationality,
                image : driver.image.url,
                description : driver.description,
                dob : driver.dob,
                teams : driver.teams
                }
    });
    const dbDrivers = await Driver.findAll({
      include: {
        model: Team,
        attributes: ["name"],
<<<<<<< HEAD
        through: {
          attributes:[],
        }
=======
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
      }
    });

    const formatedDriversDB = dbDrivers.map((driver) => {
      return {
        id : driver.id,
        name : driver.name,
        lastname : driver.lastname,
        nationality : driver.nationality,
        image : driver.image,
        description : driver.description,
        dob : driver.dob,
        teams: driver.Teams.map((team) => team.name).flat().join(", ")
      }
    })
    const allDrivers = [...apiDrivers, ...formatedDriversDB];
    res.status(200).json(allDrivers);
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};

module.exports = getDrivers;