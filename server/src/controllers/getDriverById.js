const axios = require("axios")
const getDriverById = (req, res) => {
    const id = req.params.idDriver
    axios
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
        });
};
module.exports = getDriverById