//load express server
var express = require('express');
//'process' is  predefined object in Node JS
//You can access the environment vars via 'process.env'
//Use default or 3000
const PORT = process.env.PORT || 3000;

//Create app
var app = express();

//Add Express middleware function to use for your app

//Tell Express to redirect 'https' to 'http'
//ERROR: GET http://localhost/favicon.ico 404 (Not Found)
//=>download & add favicon.ico image in your root folder
// app.use( function (req, res, next) {
//   //if request is 'http', then continue
//   if(req.headers['x-forwarded-proto'] == 'http') {
//     next();
//   }
//   //if req is https, then redirect to 'http'
//   else {
//       res.redirect('http://' + req.hostname + req.url);
//   }
// });

//Add a new folder into your project folder.
//then tell Express to server static content from this folder
app.use(express.static('public'));

//Tell Express listen to either default Port OR 3000
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
