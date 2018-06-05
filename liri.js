require("dotenv").config();
//requires
let request = require("request");
let Spotify = require('node-spotify-api');
let Twitter = require('twitter');
let omdb = require('omdb');
let fs = require("fs");
const chalk = require("chalk");
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

//  myTweets function
function myTweets() {
  fs.appendFile("log.txt", command + ", \n", function (err) {
    if (err) {
      return console.log(err);
    }
  });

  client.get('statuses/user_timeline', { q: 'HmBootcamp', count: 20 }, function (error, tweets, response) {
    if (error) {
      consol.log(error);
    } else {
      for (let i = 0; i < tweets.length; i++) {
        console.log(chalk.blue("Tweet: ") + chalk.yellow(tweets[i].text) + 
        chalk.green("\nCreated at: ") + chalk.cyan(tweets[i].created_at));
      }
    }
  });
}

//Spotify function
function spotifyThisSong() {
  fs.appendFile("log.txt", command + ", " + searchTitle + ", \n", function (err) {
    if (err) {
      return console.log(err);
    }
  });

  if (!searchTitle) {
    searchTitle = 'The Sign';
  }
  spotify.search({ type: 'track', query: searchTitle }, function (err, data) {
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
  fs.appendFile("log.txt", command + ", " + searchTitle + ", \n", function (err) {
    if (err) {
      return console.log(err);
    }
  });

  if (!searchTitle) {
    searchTitle = "Mr. Nobody";
  }
  let queryUrl = "http://www.omdbapi.com/?t=" + searchTitle + "&y=&plot=short&apikey=trilogy";
  request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(chalk.yellow("Movie title: ") + chalk.blue(JSON.parse(body).Title));
      console.log(chalk.yellow("Release Year: ") + chalk.blue(JSON.parse(body).Year));
      console.log(chalk.yellow("IMDB Raging: ") + chalk.blue(JSON.parse(body).imdbRating));
      console.log(chalk.yellow("Rotten Tomatoes Score: ") + chalk.blue(JSON.parse(body).Ratings[1].Value));
      console.log(chalk.yellow("Country of Origin: ") + chalk.blue(JSON.parse(body).Country));
      console.log(chalk.yellow("Language: ") + chalk.blue(JSON.parse(body).Language));
      console.log(chalk.yellow("Plot: ") + chalk.blue(JSON.parse(body).Plot));
      console.log(chalk.yellow("Cast: ") + chalk.blue(JSON.parse(body).Actors));
    }
  });
}

//fs function
function doWhatItSays() {
  fs.appendFile("log.txt", command + ", " + searchTitle + ", \n", function (err) {
    if (err) {
      return console.log(err);
    }
  })

  fs.readFile("random.txt", "utf8", function (error, data) {
    console.log(chalk.magenta(data));

    let doWhatItSays = data.split(',');
    if (doWhatItSays === 2) {
      pick(doWhatItSays[0], doWhatItSays[1]);
    } else if (doWhatItSays.length === 1) {
      pick(doWhatItSays[0]);
    }
  });
}