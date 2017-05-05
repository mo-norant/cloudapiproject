var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

var app = express();
app.use(bodyparser.json());

app.use(express.static('client'));

app.get('/api/callback', function(req, res){
    
})



app.listen(4000);