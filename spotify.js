require("dotenv").config();

//bring in API keys and tokens

let Spotify = require('node-spotify-api');
let keys = require('./keys.js');
let spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'life on mars' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 
  console.log(data.tracks.items[0].album);
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(data.tracks.items[0].album.name);
  //console.log(data.tracks.items[0]);
  console.log(data.tracks.items[0].name);
  });

//for song get: artist, song's name, preview link, album