const axios = require("axios")
const { Driver, Team } = require('../db');
const getDriverById = async (req, res) => {
    
    try {
            const id = req.params.idDriver;
            let driver;
            if (!isNaN(id)){
            const response = await axios.get(`http://localhost:5000/drivers/${id}`);
            const { name, nationality, image, description, dob, teams } = response.data;
            
                driver = {
                id: id,
                name: name.forename,
                lastname: name.surname,
                nationality,
                image : image.url,
                description,
                dob,
                teams
            }}else{
                const dbDrivers = await Driver.findOne({
                    where: {
                        id: id
                    },
                    include: {
                        model: Team,
                        attributes: ["name"],
<<<<<<< HEAD
                        through: {
                            attributes: [],
                        }
                    }
                });
    
=======
                    }
                });
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
                const formatedDriversDB = {
                    id: dbDrivers.id,
                    name: dbDrivers.name,
                    lastname: dbDrivers.lastname,
                    nationality: dbDrivers.nationality,
                    image: dbDrivers.image,
                    description: dbDrivers.description,
                    dob: dbDrivers.dob,
                    teams: dbDrivers.Teams.map((team) => team.name).join(", ")
                };
<<<<<<< HEAD
    
=======
                //console.log(dbDrivers.teams)
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
                driver = formatedDriversDB;
            }
            
            if (!driver) {
                res.status(404).json({ message: "Driver not found" });
                return;
            }else{
                res.status(200).json(driver);
            }
        }
        catch (err) {
                res.status(500).send("Internal server error");
                return;
            }
           
};

module.exports = getDriverById;