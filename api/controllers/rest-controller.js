'use strict'

var mongoose = require('mongoose'),
    media = mongoose.model('Media');

exports.list_media = function(req, res) {
    media.find({}, function (err, media) {
        if(err)
            res.send(err);
        res.json(media);
    });
};

exports.create_file = function(req, res) {
    var new_file = new media(req.body);
    new_file.save(function (err, file) {
        if(err)
            res.send(err);
        res.json(file);
    });
};

exports.create_audio = function(req, res) {
    var new_audio = new media(req.body);
    new_audio.save(function (err, audio) {
        if(err)
            res.send(err);
        res.json(audio);
    });
};

exports.create_video = function(req, res) {
    var new_video = new media(req.body);
    new_video.save(function (err, video) {
        if(err)
            res.send(err);
        res.json(video);
    });
};

exports.create_image = function(req, res) {
    var new_image = new media(req.body);
    new_image.save(function (err, image) {
        if(err)
            res.send(err);
        res.json(image);
    });
};

exports.read_file = function(req, res) {
    media.findById(req.params.id, function (err, file) {
        if(err)
            res.send(err)
        res.json(file);
    });
};

exports.read_audio = function(req, res) {
    media.findById(req.params.id, function (err, audio) {
        if(err)
            res.send(err)
        res.json(audio);
    });
};

exports.read_video = function(req, res) {
    media.findById(req.params.id, function (err, video) {
        if(err)
            res.send(err)
        res.json(video);
    });
};

exports.read_image = function(req, res) {
    media.findById(req.params.id, function (err, image) {
        if(err)
            res.send(err)
        res.json(image);
    });
};

exports.update_file = function (req, res) {
    media.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, file) {
        if(err)
            res.send(err);
        res.json(file)
    });
};

exports.update_audio = function (req, res) {
    media.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, audio) {
        if(err)
            res.send(err);
        res.json(audio)
    });
};

exports.update_video = function (req, res) {
    media.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, video) {
        if(err)
            res.send(err);
        res.json(video)
    });
};

exports.update_image = function (req, res) {
    media.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function (err, image) {
        if(err)
            res.send(err);
        res.json(image)
    });
};

exports.delete_file = function (req, res) {
    media.remove({
        _id: req.params.id
    }, function (err, file) {
        if(err)
            res.send(err)
        res.json({message: 'file deleted!'});
    });
};

exports.delete_audio = function (req, res) {
    media.remove({
        _id: req.params.id
    }, function (err, audio) {
        if(err)
            res.send(err)
        res.json({message: 'Audio deleted!'});
    });
};

exports.delete_video = function (req, res) {
    media.remove({
        _id: req.params.id
    }, function (err, video) {
        if(err)
            res.send(err)
        res.json({message: 'Video deleted!'});
    });
};

exports.delete_image = function (req, res) {
    media.remove({
        _id: req.params.id
    }, function (err, image) {
        if(err)
            res.send(err)
        res.json({message: 'Image deleted!'});
    });
};



