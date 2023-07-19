const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// Route to get all moods from the database
router.get('/api/moods', async (req, res) => {
  try {
    const moods = await Mood.findAll(); // Fetch all moods from the database
    res.json(moods); // Send the moods as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch moods' });
  }
});

module.exports = router;

router.get('/graph', (req, res) => {
  res.render('graph');
});
 
 
module.exports = router;