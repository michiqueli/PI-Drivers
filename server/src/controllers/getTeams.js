const axios = require("axios");
const { Teams } = require("../db");




const getTeams = async (req, res) => {
    try {
        // Intenta obtener todos los drivers de la API
        const response = await axios.get('http://localhost:5000/drivers'); // Cambia la URL según la ubicación real de tu API de drivers
        const driversFromApi = response.data;
    
        const teamsSet = new Set(); // Usamos un conjunto para evitar equipos duplicados
    
        // Recorre los drivers y extrae los equipos
        driversFromApi.forEach((driver) => {
          if (driver.teams) {
            const teamsList = driver.teams.split(',').map((team) => team.trim());
            teamsList.forEach((teamName) => {
              teamsSet.add(teamName);
            });
          }
        });
    
        const teamsArray = Array.from(teamsSet);
    
        // Guarda los equipos en la base de datos si no existen
        for (const teamName of teamsArray) {
          const existingTeam = await Teams.findOne({ where: { name: teamName } });
          if (!existingTeam) {
            await Teams.create({ name: teamName });
          }
        }
    
        // Vuelve a obtener todos los equipos de la base de datos
        const equipos = await Teams.findAll();
    
        res.status(200).json(equipos);
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
    };

module.exports = getTeams;