require("dotenv").config();

//bring in API keys and tokens

let Spotify = require('node-spotify-api');
let keys = require('./keys.js');
let spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
});

spotify.search({ type: 'artist', query: 'David Bowie' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });