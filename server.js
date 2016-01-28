var express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static('app'));
app.use(express.static('components'));
app.use(express.static('bower_components'));

app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(3000);
