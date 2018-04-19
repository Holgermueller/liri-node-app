'use strict';

require("dotenv").config();
//console.log(require())

//APIs
let keys = require('./keys.js');
//console.log(keys);
//const spotify = new spotify(keys.spotify);
let Twitter = require('twitter');
const client = new twitter(keys.twitter);
  //console.log(client);

//link to my twitter acct.

let params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //console.log(tweets);
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