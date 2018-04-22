require("dotenv").config();

//bring in api keys and tokens
let twitter = require('twitter');
let keys = require('./keys.js');
let request = require('request');
const client = new twitter(keys.twitter);
 
let params = {screen_name: 'HmBootcamp'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("Tweet: " + tweets[0].text + "\nCreated at: " + tweets[0].created_at);
    console.log("Tweet: " + tweets[1].text + "\nCreated at: " + tweets[0].created_at);
    console.log("Tweet: " + tweets[2].text + "\nCreated at: " + tweets[0].created_at);
    console.log("Tweet: " + tweets[3].text + "\nCreated at: " + tweets[0].created_at);
    console.log("Tweet: " + tweets[4].text + "\nCreated at: " + tweets[0].created_at);
    console.log("Tweet: " + tweets[5].text + "\nCreated at: " + tweets[0].created_at);
    //console.log("Created at: " + tweets[0].created_at);
    //console.log();
  }
});

