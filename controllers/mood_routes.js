const axios = require("axios");
const router = require('express').Router();
const User = require('../models/User');
const encodedParams = new URLSearchParams();
const Mood = require('../models/Mood');
const { response } = require("express");

async function getMoodData(dataText){
encodedParams.set('text', dataText);

const options = {
  method: 'POST',
  url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '5259873db9mshf7c3fba8a23606bp181c63jsn92c89f2ee959',
    'X-RapidAPI-Host': 'twinword-emotion-analysis-v1.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
    return response.data;
} catch (error) {
	console.error(error);
}

}

function percentage(num)
{
    return num*100;
}


router.post ('/mood', async(req, res) => {
    try {
    const moodData = await getMoodData(req.body.text);
    console.log(moodData.emotions_normalized);
    let surpriseData = percentage(moodData.emotions_normalized.surprise);
    let joyData = percentage(moodData.emotions_normalized.joy);
    let sadnessData = percentage(moodData.emotions_normalized.sadness);
    let disgustData = percentage(moodData.emotions_normalized.disgust);
    let fearData = percentage(moodData.emotions_normalized.fear);
    let angerData = percentage(moodData.emotions_normalized.anger);
    
    Mood.create({title: 'example title', text: req.body.text, joy: joyData, surprise: surpriseData, sadness: sadnessData, disgust: disgustData, anger: angerData, fear: fearData });
    // redirect them after the data is obtained
    res.redirect("/mood");
  
    }
    catch (err) {
        console.log(err);
    }
  
  });

module.exports = router;