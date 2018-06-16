require("dotenv").config();

//bring in api keys and tokens
let twitter = require('twitter');
let keys = require('./keys.js');
let request = require('request');
const client = new twitter(keys.twitter);
 
let params = {screen_name: 'HmBootcamp'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (error) {
    console.log(chalk.red(error));
  } else {
    tweets.forEach((tweets) => console.log(tweets.text + tweets.created_at));
    // for (let i = 0; i < tweets.length; i++) {
    //   console.log(chalk.blue("Tweet: ") + chalk.yellow(tweets[i].text) +
    //     chalk.green("\nCreated at: ") + chalk.cyan(tweets[i].created_at));
    // }
  }
});

