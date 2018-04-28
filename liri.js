'use strict';

require("dotenv").config();

//requires
let request = require("request");
let Spotify = require('node-spotify-api');
let Twitter = require('twitter');
let omdb = require('omdb');
let fs = require("fs");

//bring in APIs from .env via keys
const keys = require('./keys.js');
const client = new Twitter(keys.twitter);
const spotify = new Spotify(keys.spotify);

//give liri commmands to take
let command = process.argv[2];
let searchTitle = process.argv[3];

switch (command) {
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
  fs.appendFile("log.txt", command + ", \n", function(err) {
    if (err) {
      return console.log(err);
    }
  });

  client.get('statuses/user_timeline', {q: 'HmBootcamp', count: 20}, function(error, tweets, response) {
     if (error) {
       consol.log(error);
     } else {
      console.log("Tweet: " + tweets[0].text + "\nCreated at: " + tweets[0].created_at);
      console.log("Tweet: " + tweets[1].text + "\nCreated at: " + tweets[1].created_at);
      console.log("Tweet: " + tweets[2].text + "\nCreated at: " + tweets[2].created_at);
      console.log("Tweet: " + tweets[3].text + "\nCreated at: " + tweets[3].created_at);
      console.log("Tweet: " + tweets[4].text + "\nCreated at: " + tweets[4].created_at);
      console.log("Tweet: " + tweets[5].text + "\nCreated at: " + tweets[5].created_at);
      console.log("Tweet: " + tweets[6].text + "\nCreated at: " + tweets[6].created_at);
      console.log("Tweet: " + tweets[7].text + "\nCreated at: " + tweets[7].created_at);
      console.log("Tweet: " + tweets[8].text + "\nCreated at: " + tweets[8].created_at);
      console.log("Tweet: " + tweets[9].text + "\nCreated at: " + tweets[9].created_at);
    }
  });
}

//Spotify function
function spotifyThisSong(){
  fs.appendFile("log.txt", command + ", " + searchTitle + ", \n", function(err) {
    if (err) {
      return console.log(err);
    }
  });

  if(!searchTitle) {
    searchTitle = 'The Sign';
  }
  spotify.search({type: 'track', query: searchTitle}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    let albumTrack = data.tracks.items;
  console.log("Artist: " + albumTrack[0].artists[0].name + "\nTrack: " + albumTrack[0].name + 
  "\nPreview Link: " + albumTrack[0].preview_url + "\nAlbum: " + albumTrack[0].album.name); 
  });
}

//OMDB function
function movieThis() {
  fs.appendFile("log.txt", command + ", " + searchTitle + ", \n", function(err) {
    if (err) {
      return console.log(err);
    }
  });

  if(!searchTitle) {
    searchTitle = "Mr. Nobody";
  }
  let queryUrl = "http://www.omdbapi.com/?t=" + searchTitle + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {

    if (!error && response.statusCode === 200) {
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

//fs function
function doWhatItSays() {
  fs.appendFile("log.txt", command + ", " + searchTitle + ", \n", function(err) {
    if (err) {
      return console.log(err);
    }
  }) 

  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
    let iWantIt = data.replace(/,/i, ' ');
    spotifyThisSong(iWantIt);
  });
}