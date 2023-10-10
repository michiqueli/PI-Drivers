const axios = require('axios');
const { Driver, Team } = require('../db');
const { Sequelize } = require('sequelize');
const getDriverByName = async (req, res) => {
    
    try{
        const { name } = req.params
        const nameForSearch = name.charAt(0).toUpperCase() + name.slice(1);
        const response = await axios.get(`http://localhost:5000/drivers?name.forename=${nameForSearch}`);
        
        const driversApi = response.data.map((driver) => {
            const {
                id,
                name,
                nationality,
                image,
                description,
                dob,
                teams
            } = driver;
            return {
                id: id,
                name: name.forename,
                lastname: name.surname,
                image: image.url,
                description,
                nationality,
                dob,
                teams: teams.split(",").join(", ")
            }
        })
    
        const driversDB = await Driver.findAll({
            where: {
            [Sequelize.Op.or]: [
            { 'name': { [Sequelize.Op.iLike]: `%${nameForSearch}%` } }
            ]},
            include: {
                model: Team,
                attributes: ['name'],
              }
              
        })
        const formatedDriversDB = driversDB.map((driver) => {
            return {
            id: driver.id,
            name: driver.name,
            lastname: driver.lastname,
            nationality: driver.nationality,
            image: driver.image,
            description: driver.description,
            dob: driver.dob,
            teams: driver.Teams.map((team) => team.name).flat().join(", ")
            }
        })
        console.log(formatedDriversDB)
        const arrayResponse = [...driversApi, ...formatedDriversDB]
        console.log(arrayResponse)      
        if(arrayResponse.length > 0) {
            res.status(200).json(arrayResponse);
        } else {
            res.status(400).json({error: 'Not found drivers whit this name'})
        }
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};
module.exports = {
    getDriverByName
}