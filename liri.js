'use strict';

require("dotenv").config();

//requires
let spotify = require('node-spotify-api');
let Twitter = require('twitter');
let omdb = require('omdb');

//bring in APIs from .env via keys
let keys = require('./keys.js');
//twitter keys
const client = new twitter(keys.twitter);
//spotify keys (for some reason, this is the only way I can get it to work)
let spotify = new Spotify(keys.spotify);
//omdb key


//GET tweets from my twitter acct.
let params = {screen_name: 'HmBootcamp'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
      console.log(tweets);
    }
  });

//GET 

//liri must be able to take the following commmands
//* `my-tweets`
//* `spotify-this-song`
//* `movie-this`
//* `do-what-it-says`

switch (action) {
     case "my-tweets":
     myTweets();
     break;

     case "spotify-this-song":
     spotifyThisSong();
     break;

     case "movie-this":
     movieThis();
     break;

     case "do-what-it-says":
     doWhatItSays();
     break;
}