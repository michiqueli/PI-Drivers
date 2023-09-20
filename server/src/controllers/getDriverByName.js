const axios = require('axios');
const { Driver } = require('../db');
const { Sequelize } = require('sequelize');
const getDriverByName = async (req, res) => {
    
    try{
        const { name } = req.params
        
        const apiResponse = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`);
        const dataApi = apiResponse.data;
    
        const driversDB = await Driver.findAll({
            where: {
            [Sequelize.Op.or]: [
            { 'name': { [Sequelize.Op.iLike]: `%${name}%` } },
            { 'lastname': { [Sequelize.Op.iLike]: `%${name}%` } },
            ],
        },
        });
        const arrayResponse = [...dataApi, ...driversDB]
              
        if(arrayResponse.length > 0) {
            res.status(200).json(arrayResponse);
        } else {
            res.status(400).json({error: 'No se encuentra conductor con ese nombre'})
        }
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};
module.exports = {
    getDriverByName
}