const axios = require("axios")
const { Driver } = require('../db');
const getDriverById = async (req, res) => {
    const id = req.params.idDriver;
    let driver;

    if (id < 600) {
        try {
            const response = await axios.get(`http://localhost:5000/drivers/${id}`);
            const { id: apiId, name, nationality, image, description, dob, teams } = response.data;
            driver = {
                id: apiId,
                name: name.forename,
                lastname: name.surname,
                nationality,
                image,
                description,
                dob,
                teams
            };
        } catch (err) {
            if (err.response && err.response.status === 404) {
                res.status(404).json({ message: "Not found" });
                return;
            } else {
                console.error(err);
                res.status(500).send("Internal server error");
                return;
            }
        }
    } else {
        try {
            driver = await Driver.findOne({
                where: {
                    id: id
                }
            });

            if (!driver) {
                res.status(404).json({ message: "Driver not found in the database" });
                return;
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("Internal server error");
            return;
        }
    }

    res.status(200).json(driver);
};

module.exports = getDriverById;