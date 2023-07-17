const { Model, DataTypes } = require('sequelize');
const { hash, compare } = require('bcrypt');
const db = require('../db/connection');
const User = require('./User')

class Mood extends Model { }

Mood.init({
    user_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          min: 5
        }
      },

  mood: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  },

}, {
  sequelize: db,
  modelName: 'user',
});

module.exports = Mood;
