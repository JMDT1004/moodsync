const router = require('express').Router();
const User = require('../models/User');
const Mood = require('../models/Mood');
// Middleware
function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
};

// Login page
router.get('/login', (req, res) => {
  if (req.session.user_id) return res.redirect('/mood');
  
  res.render('login', {
    isLogin: true
  });
});

// Homepage
router.get('/', (req, res) => {
  if (req.session.user_id) return res.redirect('/entry');
  
  res.render('index', {
    isHome: true,
    isLoggedIn: req.session.user_id
  });
});

// Register Page
router.get('/register', (req, res) => {
  res.render('register', {
    isRegister: true
  });
});

// mood Page
router.get('/mood', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id, {
      include: Mood
    });

    const moods = user.moods.map(mood => mood.get({ plain: true }));
    console.log("These are the moods: ", moods)
    res.render("mood", {
      email: user.email,
      entry: moods // Pass the moods data
    });
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send("An error occurred");
  }
});


router.get('/entry', isAuthenticated, async (req, res) => {
  
  const user = await User.findByPk(req.session.user_id);
  
  res.render('entry', {
    email: user.email
  });
  
});


module.exports = router;