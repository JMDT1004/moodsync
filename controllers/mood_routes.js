const axios = require("axios");
const router = require('express').Router();
const User = require('../models/User');
const encodedParams = new URLSearchParams();
const Mood = require('../models/Mood');

async function getMoodData(){
encodedParams.set('text', Mood.text);

const options = {
  method: 'POST',
  url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

router.post ('/mood',(req, res) => {
    getMoodData();
    try {
     // const newMood = await Mood.create(req.body);
    }
    catch (err) {
        console.log(err);
    }
  
  });

module.exports = router;