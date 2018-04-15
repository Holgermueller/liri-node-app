import { twitter } from "./keys";

'use strict';

require("dotenv").config();

const spotify = new spotify(keys.spotify);
const client = new twitter(keys.twitter);

//liri must be able to take the following commmands
//* `my-tweets`

//* `spotify-this-song`

//* `movie-this`

//* `do-what-it-says`

