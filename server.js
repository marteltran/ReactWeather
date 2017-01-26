//load express server
var express = require('express');

//Create app
var app = express();

//Add function to your app
//Add a new folder into your project folder
app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});
