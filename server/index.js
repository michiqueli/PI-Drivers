const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

<<<<<<< HEAD
conn.sync({ force: true }).then(() => {
=======
conn.sync({ force: false }).then(() => {
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))