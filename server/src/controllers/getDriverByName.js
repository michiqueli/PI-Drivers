const axios = require ("axios")


const getDriverByName = (req, res) => {
    const name = req.query.name;
    const apiEndpoint = ` http://localhost:5000/drivers?name.forename=${name}|name.surname=${name}`;
    const dbEndpoint = `https://localhost:5432/drivers?name.forename=${name}|name.surname=${name}`;
    
    axios.get(apiEndpoint)
    .then(apiResponse => {
        axios.get(dbEndpoint)
        .then(dbResponse => {
          const drivers = [...apiResponse.data, ...dbResponse.data];
          drivers.sort((a, b) => a.name.surname.localeCompare(b.name.surname));
          const result = drivers.slice(0, 15);
          res.status(200).json(result);
        })
        .catch(error => {
          res.status(500).json({ message: 'Error fetching drivers from database' });
        });
    })
    .catch(error => {
      res.status(404).json({ message: `No drivers found with name '${name}'` });
    });
}
module.exports = getDriverByName