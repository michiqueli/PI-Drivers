const axios = require('axios');
const { Driver } = require('../db');
const { Sequelize } = require('sequelize');



const getDriverByName = (req, res) => {
    
    try{
        const { name } = req.query
        console.log(name)
        axios.get(`http://localhost:5000/drivers?name.forename=${name}`)
        .then(response => {
            dataApi = response.data
        });

        const driversDB = Driver.findAll({
            where: {
                [Sequelize.Op.or]: [
                    { 'name': { [Sequelize.Op.iLike]: `%${name}%` } },
                    { 'lastName': { [Sequelize.Op.iLike]: `%${name}%` } },
                  ],
                },
              });
                  
              const arrayResponse = [...dataApi, ...driversDB];
          
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