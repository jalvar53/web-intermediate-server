var express = require('express'),
    app = express(),
    port = 8080,
    mongoose = require('mongoose'),
    media = require('./api/models/rest-model-media'),
    user = require('./api/models/rest-model-user'),
    bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://joseluh:Maximiliano2@ds133221.mlab.com:33221/animal-pics',
    {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/rest-routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, '0.0.0.0');

console.log('Restful intermediate server started on port: ', port);
