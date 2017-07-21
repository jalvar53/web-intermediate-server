var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Media = require('./api/models/rest-model'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/webDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

var routes = require('./api/routes/rest-routes');
routes(app);

app.listen(port);

console.log('Restful intermediate server started on port: ', port);