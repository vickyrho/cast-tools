// base setup //

var express = require('express');
var app = express();
var port = 7000;
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var path = require('path');
var appRoutes = require('./app/routes/api')(router);

//app.use(bodyParser.json);
//app.use(bodyParser.urlencoded({extended:true}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use('/api',appRoutes);

mongoose.connect('mongodb://wiki:wiki@ds155934.mlab.com:55934/myownapp',{ useMongoClient: true });

app.use(express.static(__dirname+'/public'));

app.get('*',function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port);

console.log('Magic happens at '+port);
