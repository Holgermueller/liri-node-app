require("dotenv").config();
//bring in api keys
let twitter = require('twitter');
let keys = require('./keys.js');
const client = new twitter(keys.twitter);

exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
 
var params = {screen_name: 'HmBootcamp'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
  }
});

