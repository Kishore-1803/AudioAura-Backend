const express = require('express');
const axios = require('axios');
const { exec } = require('child_process');
const fs = require('fs');
const { fetchWeather, fetchNews } = require('../utils/apiCalls');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const GEMINI_API_KEY = 'AIzaSyA0AFjEHmFR8XXrgCmL0eq3RleE84YXJoY';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const router = express.Router();

router.post('/', async (req, res) => {
  const { city } = req.body;

  try {
      if (!city) {
          throw new Error('City is required');
      }
      const weatherInfo = await fetchWeather(city);
      const newsArticles = await fetchNews();

      const scriptPrompt = `Create a podcast script with the following details, without any music references, intro music, outro music, short pauses, or mentions of the host. Ensure the script is compact without excessive spacing between lines. Do not include numbers or the phrases "Weather Update" and "News Update":\n` +
                           `The weather in ${city} is ${weatherInfo.temperature}°C.\n` +
                           newsArticles.map(article => `${article.title} – ${article.source}`).join('\n');

      const result = await model.generateContent(scriptPrompt);
      const script = result.response.text();

      fs.writeFileSync('script.txt', script);

      exec('gtts-cli -f script.txt -o podcast.mp3', (error, stdout, stderr) => {
          if (error) {
              console.error(`Error generating audio: ${error.message}`);
              return res.status(500).send('Error generating podcast');
          }

          res.send({
              audioUrl: 'http://localhost:5000/podcast.mp3',
              transcript: script,
          });
      });
  } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error generating podcast');
  }
});

module.exports = router;