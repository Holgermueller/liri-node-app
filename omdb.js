require("dotenv").config();

let omdb = require('omdb');
let keys = require('./keys.js');
const movie = new omdb(keys.omdb);