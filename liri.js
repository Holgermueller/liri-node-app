import { twitter } from "./keys";
import { request } from "https";

'use strict';

require("dotenv").config();
console.log(require())

//APIs
const spotify = new spotify(keys.spotify);
const client = new twitter(keys.twitter);

let keys = require('./keys.js');
console.log(keys);

//link to my twitter acct.

request("https://api.twitter.com/1.1/search/tweets.json", function(error, response, body){
    if (!error && response.statusCode === 200) {
        console.log(body);
    }
})

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