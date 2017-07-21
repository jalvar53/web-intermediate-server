'use strict'

var mongoose = require('mongoose');

var MediaSchema = mongoose.Schema;

var mediaSchema = new MediaSchema({
    name: String,
    description: String,
    author: String,
    genre: String
});

module.exports = mongoose.model('Media', mediaSchema);
