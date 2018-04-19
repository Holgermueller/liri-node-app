'use strict';

require("dotenv").config();
//console.log(require())
//requires
let spotify = require('node-spotify-api');
let twitter = require('twitter');
let omdb = require('omdb');

//APIs
let keys = require('./keys.js');
//console.log(keys);
const spotify = new spotify(keys.spotify);
const client = new twitter(keys.twitter);

//link to my twitter acct.

let params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
      console.log(tweets);
    }
  });


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