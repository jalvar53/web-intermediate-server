'use strict';

var mongoose = require('mongoose');

var MediaSchema = mongoose.Schema;

var mediaSchema = new MediaSchema({
    _id: String,
    mediaName: String,
    url: String,
    description: String,
    author: String,
    genre: String,
    privacy: String
},
    {
        collection: 'media'
    });

module.exports = mongoose.model('Media', mediaSchema);
