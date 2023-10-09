const { Driver } = require('../db');
const createDriver = async (req, res) => {

    const { name, lastname, description, image, nationality, dob, teams} = req.body;
    try {
        const findDriver = await Driver.findOne({
            where : {
                name : name,
                lastname:lastname,
            }})

        if (findDriver){ 
            res.status(300).send("This Driver already exist")}
        else{

        const newDriver = await Driver.create({
            name,
            lastname,
            description,
            image,
            nationality,
            dob,
        });
            newDriver.addTeams(teams)
            res.status(201).json(newDriver);
        }

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = {
    createDriver
}