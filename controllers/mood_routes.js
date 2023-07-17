const router = require('express').Router();
const User = require('../models/User');
const Mood = require('../models/Mood')


router.post('/mood', async (req, res) => {
    console.log("Got into post route.")
    try {
      const newUser = await User.create(req.body);
      
      //creates a session and sends a cookie to the client 
      req.session.user_id = newUser.id;
  
    res.redirect('/mood');
    } catch (err) {
        const dupeEmail = (err.errors.find(e => e.path === 'email'));
  
        if (dupeEmail) res.redirect('/login');
    }
  
  });
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '5259873db9mshf7c3fba8a23606bp181c63jsn92c89f2ee959',
		'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
	},
	data: {
		text: Mood.entry
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});