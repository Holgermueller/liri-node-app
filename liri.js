'use strict';

require("dotenv").config();

//requires
let request = require("request");
let Spotify = require('node-spotify-api');
let Twitter = require('twitter');
let omdb = require('omdb');
let fs =require("fs");

//bring in APIs from .env via keys
const keys = require('./keys.js');
//twitter keys
const client = new Twitter(keys.twitter);
//spotify keys (for some reason, this is the only way I can get it to work)
const spotify = new Spotify(keys.spotify);

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
      console.log("Tweet: " + tweets[6].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[7].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[8].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[9].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[10].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[11].text + "\nCreated at: " + tweets[0].created_at);

    }
  });
}

//Spotify function
function spotifyThisSong(){
  spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log("Artist: " + data.tracks.items[0].artists[0].name + "\nTrack: " + data.tracks.items[0].name + 
  "\nPreview Link: " + data.tracks.items[0].uri + "\nAlbum: " + data.tracks.items[0].album.name); 
  });
}

//OMDB function
function movieThis() {
  let queryUrl = "http://www.omdbapi.com/?t=" + process.argv[3] + "&y=&plot=short&apikey=trilogy";
  //console.log(queryUrl);

  request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {
      //console.log(JSON.parse(body));
      console.log("Movie title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Raging: " + JSON.parse(body).imdbRating);
      console.log("Rotten Tomatoes Score: " + JSON.parse(body).Ratings[1].Value);
      console.log("Country of Origin: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Cast: " + JSON.parse(body).Actors);
    }
  });
}

function doWhatItSays() {
  
}