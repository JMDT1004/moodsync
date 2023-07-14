const router = require('express').Router();
const User = require('../models/User')

// Middleware
function isAuthenticated(req, res, next) {
  const isAuthenticated = req.session.user_id;

  if (!isAuthenticated) return res.redirect('/login');

  next();
};

// Login page
router.get('/login', (req, res) => {
  if (req.session.user_id) return res.redirect('/thought');
  
  res.render('login', {
    isLogin: true
  });
});

// Homepage
router.get('/', (req, res) => {
  if (req.session.user_id) return res.redirect('/thought');
  
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

// Thought Page
router.get('/thought', isAuthenticated, async (req, res) => {
  const user = await User.findByPk(req.session.user_id);
  
  res.render('thought', {
    email: user.email
  });
  
});


module.exports = router;