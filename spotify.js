require("dotenv").config();

//bring in API keys and tokens

let Spotify = require('node-spotify-api');
let keys = require('./keys.js');
let spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'lazarus' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 
  console.log(data.tracks.items[0]); 
  });