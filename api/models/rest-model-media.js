'use strict';

var mongoose = require('mongoose');

var MediaSchema = mongoose.Schema;

var mediaSchema = new MediaSchema({
    _id: String,
    mediaName: String,
    description: String,
    author: String,
    genre: String,
    mediaType: String
},
    {
        collection: 'media'
    });

module.exports = mongoose.model('Media', mediaSchema);
