var express = require("express");
var massive = require("massive");
var bodyParser = require("body-parser");

var app = module.exports = express();


app.listen(3000, function(){
  console.log('we hear you');
});
