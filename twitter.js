require("dotenv").config();

//bring in api keys and tokens
let twitter = require('twitter');
let keys = require('./keys.js');
let request = require('request');
const client = new twitter(keys.twitter);
 
let params = {screen_name: 'HmBootcamp', count: 5};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
    console.log("Created at: " + tweets[0].created_at);
    //console.log();
  }
});

