require("dotenv").config();
const axios = require("axios");
const router = require('express').Router();
const encodedParams = new URLSearchParams();
const Mood = require('../models/Mood');

async function getMoodData(dataText){
encodedParams.set('text', dataText);

const options = {
  method: 'POST',
  url: 'https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': process.env.API_KEY,
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


router.post ('/entry', async(req, res) => {
    try {
    const newEntry = req.body.text;
    console.log("This is a new text entry: ", newEntry);
    const moodData = await getMoodData(newEntry);
    //console.log(moodData.emotions_normalized);
    let surpriseData = percentage(moodData.emotions_normalized.surprise);
    let joyData = percentage(moodData.emotions_normalized.joy);
    let sadnessData = percentage(moodData.emotions_normalized.sadness);
    let disgustData = percentage(moodData.emotions_normalized.disgust);
    let fearData = percentage(moodData.emotions_normalized.fear);
    let angerData = percentage(moodData.emotions_normalized.anger);
    console.log(newEntry);
    Mood.create({title: 'example title', entry: newEntry, joy: joyData, surprise: surpriseData, sadness: sadnessData, disgust: disgustData, anger: angerData, fear: fearData });
    // redirect them after the data is obtained
    res.redirect("/mood");
  
    }
    catch (err) {
        console.log(err);
    }
  
  });
  

module.exports = router;