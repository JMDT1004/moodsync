const { Model, DataTypes } = require('sequelize');
const db = require('../db/connection');

class Mood extends Model { }

Mood.init({
  // Field to store the user's name for the mood
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      min: 5 // Minimum length of 5 characters required
    }
  },
  // Field to store the user's mood 
  mood: {
    type: DataTypes.FLOAT,
    allowNull: false,
    // validate: {
    //   isNumeric: true // Validated to ensure it's a numeric value
    // }
  },
  // Field to store the date of the mood entry 
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  // Field to store a entry or notes about the user mood 
  entry: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  // Field to store the array of detected emotions from the API 
  emotions_detected: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  // Field to store the emotion scores as a JSON object from the API 
  emotion_scores: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  // Field to store the normalized emotions as a JSON object from the API 
  emotions_normalized: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  // Field to store the normalized thresholds as a JSON object from the API 
  thresholds_normalized: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  sequelize: db,
  modelName: 'mood',
});

module.exports = Mood;
