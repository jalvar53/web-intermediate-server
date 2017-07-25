'use strict'

var mongoose = require('mongoose'),
    mediaM = mongoose.model('Media'),
    user = mongoose.model('User');

exports.create_user = function(req, res) {
    var new_user = new user(req.body);
    new_user.save(function (err, user){
        if(err)
            res.send(err);
        res.json(user)
    })
};

exports.read_user = function(req, res) {
    user.findById(req.params.username, function (err, user) {
        if(err)
            res.send(err)
        res.json(user);
    });
};

exports.list_users = function(req, res) {
    user.find({}, function (err, users) {
        if(err)
            res.send(err);
        res.json(users);
    });
};

exports.list_media = function(req, res) {
    mediaM.find({}, function (err, media) {
        if(err)
            res.send(err);
        res.json(media);
    });
};

exports.create_media = function(req, res) {
    var new_media = new mediaM(req.body);
    new_media.save(function (err, media) {
        if(err)
            res.send(err);
        res.json(media);
    });
};

exports.read_media = function(req, res) {
    mediaM.findById(req.params.id, function (err, media) {
        if(err)
            res.send(err)
        res.json(media);
    });
};

exports.update_media = function (req, res) {
    mediaM.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, media) {
        if(err)
            res.send(err);
        res.json(media)
    });
};

exports.delete_media = function (req, res) {
    mediaM.remove({
        _id: req.params.id
    }, function (err, media) {
        if(err)
            res.send(err);
        res.json({message: 'Media deleted!'});
    });
};



