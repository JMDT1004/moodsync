const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');
const User = require('./User');

class Mood extends Model { }

Mood.init({
  // Field to store the user's name for the mood
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5 // Minimum length of 5 characters required
    }
  },
  // Field to store the user's mood as a percentage
  admiration: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  adoration: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  }, 
  appreciation: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },amusement: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },anger: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },annoyance: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },anxiety: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },awe: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },akwarkness: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },boredom: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },calmness: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },concentration: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },confusion: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },contemplation: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },contempt: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },contentment: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },craving: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },desire: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },determination: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },disapproval: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },disgust: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },distress: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },doubt: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },ectasy: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },embarrassment: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },empathic: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },entusiasm: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },entrancement: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },envy: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },excitement: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },fear: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },gratitude: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },guilt: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },horror: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },interest: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },joy: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },love: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },nostaligia: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },pain: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },pride: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },realization: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },relief: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },romance: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },sadness: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },sarcasm: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },satisfaction: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },shame: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },surprise_negative: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },surprise_positive: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },sympathy: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },tiredness: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },triumph: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false,
  },
  // Field to store an entry or notes about the user's mood
  entry: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'mood',
});

// Define the association for Mood to User
// Mood.belongsTo(User, { foreignKey: 'userId' });

module.exports = Mood;
