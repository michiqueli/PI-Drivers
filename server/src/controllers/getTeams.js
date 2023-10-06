const axios = require("axios");
const { Team } = require("../db");




const getTeams =  async (req, res) => {
    try {
        const teamsSet = new Set();
        const apiEndpoint = 'http://localhost:5000/drivers';
        const apiResponse = await axios.get(apiEndpoint);
        const apiDrivers = apiResponse.data;
        

        apiDrivers.forEach((driver) => {
            if (driver.teams) {
            const teamsList = driver.teams.split(',').map((team) => team.trim());
            teamsList.forEach((teamName) => {
            teamsSet.add(teamName);
            });
          }
        });
        
        const teamsArray = Array.from(teamsSet).sort();
    
        for (const teamName of teamsArray) {
          const existingTeam = await Team.findOne({ where: { name: teamName } });
          if (!existingTeam) {
            await Team.create({ name: teamName });
          }
        }
    
        const equipos = await Team.findAll();
    
        res.status(200).json(equipos);
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
    };

module.exports = getTeams;