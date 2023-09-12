const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('Teams',{
        ID: {
          type: DataTypes.INTEGER,
          allowNull: false,
          prumaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      });
    };