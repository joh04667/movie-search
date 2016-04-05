var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
app.use(express.static('public'));

app.get('/', function(req, res) {
  console.log('received request');
  res.sendFile(path.join(__dirname, './index0.html'));
  console.log('sent page');
});











// listen
app.listen(port, function(){
  console.log('listening on port', port);
});
