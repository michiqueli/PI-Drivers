const { Driver } = require('../db');
const createDriver = async (req, res) => {

    const { name, lastname, description, image, nationality, dob, teams} = req.body;
console.log(teams)
    try {
        const newDriver = await Driver.create({
            name,
            lastname,
            description,
            image,
            nationality,
            dob,
        });
            newDriver.addTeams(teams)
        

        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    createDriver
}