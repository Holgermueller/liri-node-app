require("dotenv").config();

//bring in api keys and tokens
let twitter = require('twitter');
let keys = require('./keys.js');
const client = new twitter(keys.twitter);
 
let params = {screen_name: 'HmBootcamp'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
    console.log(tweets[0].created_at);
  }
});

