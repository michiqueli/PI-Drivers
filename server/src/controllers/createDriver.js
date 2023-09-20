const { Driver } = require('../db');
const createDriver = async (req, res) => {

    const { body } = req;

    try {
        const newDriver = await Driver.create({
            id:body.id,
            name: body.name,
            lastname: body.lastname,
            description: body.description,
            image: body.image,
            nationality: body.nationality,
            dob: body.dob,
            teams: body.teams
        });
        

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    createDriver
}