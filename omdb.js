require("dotenv").config();

let omdb = require('omdb');
let request = require('request');

let movieName =  process.argv[2];

let queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
console.log(queryUrl);

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

