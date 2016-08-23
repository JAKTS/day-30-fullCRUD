  var app = require('./index.js')
  var db = app.get('db');

  module.exports = {
    readProducts: function(req, res, next){
        db.read_products(function (err, response){
          if(err){
            res.json(err);
          } else {
            console.log("stuff");
            res.json(err);
          }
        })
      }
  }
