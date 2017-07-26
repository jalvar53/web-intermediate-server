'use strict';

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema;

function toLower (str) {
    return str.toLowerCase();
}

var userSchema = new UserSchema({
    _id: String,
    username: String,
    password: String,
    email: { type: String, set: toLower }
},
    {
        collection: 'users'
    });

module.exports = mongoose.model('User', userSchema);