require("dotenv").config();
const { Sequelize } = require("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env
const DriverFunction = require ('./models/Driver')
const TeamFunction = require ('./models/Team')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});

DriverFunction(sequelize);
TeamFunction(sequelize);

const { Driver, Team } = sequelize.models;

Driver.belongsToMany(Team, {through: 'drivers_teams'});
Team.belongsToMany(Driver, {through: 'drivers_teams'});

module.exports = {
  Driver,
  Team, //{ Product, User } = require('./db.js');
  conn: sequelize,     // { conn } = require('./db.js');
};