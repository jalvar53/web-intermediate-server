var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    media = require('./api/models/rest-model-media'),
    user = require('./api/models/rest-model-user'),
    bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

mongoose.Promise = global.Promise;

var routes = require('./api/routes/rest-routes');
routes(app);

mongoose.connect('mongodb://localhost/webDB',
    {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Restful intermediate server started on port: ', port);