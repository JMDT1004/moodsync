const router = require('express').Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
    try {
      const formEmail = req.body.email;
      const formPassword = req.body.password;
  
      const user = await User.findOne({
        where: {
          email: formEmail
        }
      });
      //redirect to register
      if (!user) return res.redirect('/register');
  
      //password match 
      const isValidPass = await user.validatePass(formPassword);
  
      if(!isValidPass) throw new Error('Invalid_password');
  
      //user has been validated create a session
      req.session.user_id = user.id;
  
      res.redirect('/mood');
  
    } catch (err) {
      if (err.message === 'invalid_password') {
        res.redirect('/login');
      }
    }
  });

  router.post('/register', async (req, res) => {

    try {
      const newUser = await User.create(req.body);
      
      //creates a session and sends a cookie to the client 
      req.session.user_id = newUser.id;
  
    res.redirect('/mood');
    } //catch (err) {
    //     const dupeEmail = (err.errors.find(e => e.path === 'email'));
  
    //     if (dupeEmail) res.redirect('/login');
    // }
  
  });

  //log out user
router.get('/logout', (req, res) => {
    req.session.destroy();
  
    res.redirect('/');
  });
  
  module.exports = router;