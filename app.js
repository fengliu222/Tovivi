
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoose = require('mongoose')
  , lessc  = require('./lessC');



var app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  
});

app.configure('development', function(){

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.errorHandler());

  mongoose.connect('mongodb://localhost/moejser');
});

app.configure('production', function(){
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/moejser');

});

// Routes
routes(app);

// less

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
