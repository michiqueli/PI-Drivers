const axios = require('axios');

const getDrivers = (req, res) => {

    axios
    .get("http://localhost:5000/drivers")
    .then((response) => {
        res.status(200).json(response.data)
    }
    )
    .catch((err) => {
        res.status(500).send(err.message)
    })
};

module.exports = getDrivers