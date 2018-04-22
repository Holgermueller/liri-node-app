'use strict';

require("dotenv").config();

//requires
let request = require("request");
let spotify = require('node-spotify-api');
let Twitter = require('twitter');
let omdb = require('omdb');

//bring in APIs from .env via keys
let keys = require('./keys.js');
//twitter keys
const client = new Twitter(keys.twitter);
//spotify keys (for some reason, this is the only way I can get it to work)
//let spotify = new Spotify(keys.spotify);
//omdb key?

//fs
let fs =require("fs");

//GET tweets from my twitter acct.


//GET 

//liri must be able to take the following commmands
//* `my-tweets`
//* `spotify-this-song`
//* `movie-this`
//* `do-what-it-says`

let action = process.argv[2];
let value = process.argv[3];

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

//bring in Twitter function

function myTweets() {
  let params = {screen_name: 'HmBootcamp'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
      console.log("Tweet: " + tweets[0].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[1].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[2].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[3].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[4].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[5].text + "\nCreated at: " + tweets[0].created_at);
    }
  });
}

function spotifyThisSong(){
  
}