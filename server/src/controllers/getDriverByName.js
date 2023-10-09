const axios = require('axios');
const { Driver, Team } = require('../db');
const { Sequelize } = require('sequelize');
const getDriverByName = async (req, res) => {
    
    try{
        const { name } = req.params
        const nameForSearch = name.charAt(0).toUpperCase() + name.slice(1);
        const response = await axios.get(`http://localhost:5000/drivers?name.forename=${nameForSearch}`);
        
<<<<<<< HEAD
        console.log(response)
=======
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
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
                teams
            }
        })
    
        const driversDB = await Driver.findAll({
            where: {
            [Sequelize.Op.or]: [
            { 'name': { [Sequelize.Op.iLike]: `%${nameForSearch}%` } }
<<<<<<< HEAD
            ],},
            include: {
                model: Team,
                attributes: ["name"],
                through: {
                  attributes:[],
                }
              }
        });
=======
            ]},
            include: {
                model: Team,
                attributes: ['name'],
              }
              
        })
        
        console.log(driversDB)
        /*const formatedDriversDB = driversDB.map((driver) => {
            const {
                id,
                name,
                lastname,
                nationality,
                image,
                description,
                dob,
                teams
            } = driver;
            return {
            id: id,
            name: name,
            lastname: lastname,
            nationality: nationality,
            image: image,
            description: description,
            dob: dob,
            teams: teams.map((team) => team.name).join(", ")
            }
        })*/
          
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
        const arrayResponse = [...driversApi, ...driversDB]
              
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