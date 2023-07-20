const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');

// Middleware
function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
}

// Route to get all moods from the database
router.get('/api/moods', isAuthenticated, async (req, res) => {
  try {
    const moods = await Mood.findAll(); // Fetch all moods from the database
    res.json(moods); // Send the moods as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch moods' });
  }
});

router.get('/graph', isAuthenticated, (req, res) => {
  res.render('graph');
});
 
 
module.exports = router;