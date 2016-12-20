var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database');
var port     = 8080;

mongoose.connect(database.url);

app.use('/app', express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// routes
require('./app/routes.js')(app);

// make '/app/auth' the main page
app.get('/', function (req, res) {
    return res.redirect('/app/auth');
});

app.get('/app/?', function (req, res) {
    return res.redirect('/app/todolist');
});

// listen (start app with node server.js)
app.listen(port);
console.log("App listening on port : " + port);
console.log("Access http://localhost:" + port + " on your internet navigator");
