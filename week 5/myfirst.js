var http = require('http');
var dt = require('./myfirstmodule');


http.createServer(function (req, res) {

  //an HTTP header with the correct content type must be used if the response from the HTTP server is supposed to be displayed as HTML
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime())
  res.end();
}).listen(5000);