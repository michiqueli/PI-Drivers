const axios = require("axios")
const { Driver } = require('../db');
const { Sequelize } = require('sequelize');
const getDriverById = async (req, res) => {
    const id = req.params.idDriver
    if (id < 600){
    await axios
        .get(`http://localhost:5000/drivers/${id}`)
        .then((response) => {
            const { id, name, nationality, image, description, dob, teams } =
                response.data;
            const driver = {
                id,
                name: name.forename,
                lastname: name.surname,
                nationality,
                image,
                description,
                dob,
                teams
            };
            res.status(200).json(driver)
        })
        .catch((err) => {
            if (err.response && err.response.status === 404) {
                res.status(404).json({ message: "Not found" });
            } else {
                res.status(500).send(err.message);
            }
        })
    }else {
    await Driver.findAll({
        where: {
            [Sequelize.Op.or]: [
                { 'id': { [Sequelize.Op.Like]: id } },
              ],
            },
          });
    }
};
module.exports = getDriverById