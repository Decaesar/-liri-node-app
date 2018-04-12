

var dotenv = require('dotenv').config();

var Twitter = require('twitter');

var config = require('./keys');

console.log(config);

var client = new Twitter(config);
 
var params = { 
screen_name: 'Mohamme80431863',
count : 20
};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});





 
// var fs = require("fs");

// fs.readFile("keys.js", "utf8", function(error, data) {

//   // If the code experiences any errors it will log the error to the console.
//   if (error) {
//     return console.log(error);
//   }

//   // We will then print the contents of data
//   console.log(data);

//   // Then split it by commas (to make it more readable)
//   var dataArr = data.split(",");

//   // We will then re-display the content as an array for later use.
//   console.log(dataArr);




