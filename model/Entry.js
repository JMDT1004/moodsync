const { Model, DataTypes } = require('sequelize');
const { hash, compare } = require('bcrypt');
const db = require('../db/connection');
const User = require('./User');

class Entry extends Model { }

Entry.init({
  mood: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  },
  dailyFeeling: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5
    }
  }
}, {
  sequelize: db,
  modelName: 'entry'
});

User.hasMany(Entry);
Entry.belongsTo(User);

module.exports = Entry;
