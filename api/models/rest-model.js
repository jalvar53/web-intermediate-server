'use strict';

var mongoose = require('mongoose');

var MediaSchema = mongoose.Schema;
var UserSchema = mongoose.Schema;

var mediaSchema = new MediaSchema({
    _id: String,
    mediaName: String,
    description: String,
    author: String,
    genre: String,
    mediaType: String
});

var userSchema = new UserSchema({
    _id: String,
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('Media', mediaSchema);
module.exports = mongoose.model('User', userSchema);
