var express = require("express");
var massive = require("massive");
var bodyParser = require("body-parser");
var connectionString = 'postgres://MichaelDavis@localhost/day_30_fullcrud';


var app = module.exports = express();

var massiveInstance = massive.connectSync({
  connectionString: connectionString
});
app.set('db', massiveInstance);

app.use(bodyParser.json());

var ctrl = require('./productCtrl.js');


app.get('/users', ctrl.readProducts);

app.listen(3000, function(){
  console.log('we hear you');
});
