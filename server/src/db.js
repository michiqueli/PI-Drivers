require("dotenv").config();
const { Sequelize } = require("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env
const DriverFunction = require ('./models/Driver')
const TeamsFunction = require ('./models/Teams')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});

DriverFunction(sequelize);
TeamsFunction(sequelize);

const { Driver, Teams } = sequelize.models;

Driver.belongsToMany(Teams, {through: 'driver_teams'});
Teams.belongsToMany(Driver, {through: 'driver_teams'});

module.exports = {
  Driver,
  Teams, //{ Product, User } = require('./db.js');
  conn: sequelize,     // { conn } = require('./db.js');
};