var express = require('express'),
    app = express(),
    port = 3002,
    mongoose = require('mongoose'),
    media = require('./api/models/rest-model-media'),
    user = require('./api/models/rest-model-user'),
    bodyParser = require('body-parser');

var cors = require('cors');
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.131.137.157/webDB',
    {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/rest-routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(process.env.PORT || port);

console.log('Restful intermediate server started on port: ', port);
