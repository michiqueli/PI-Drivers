const { Driver } = require('../db');
const createDriver = (req, res) => {

    const { body } = req;

    try {
        const newDriver = Driver.create({
            id:600,
            name: body.name,
            lastname: body.lastname,
            description: body.description,
            image: body.image,
            nationality: body.nationality,
            dob: body.dob
        });

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    createDriver
}