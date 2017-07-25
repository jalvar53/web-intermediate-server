'use strict';

module.exports = function(app) {
    var uploader = require('../controllers/rest-controller');

    // Create new user

    app.route('/user/new')
        .post(uploader.create_user);

    // Get one user by username

    app.route('/user/:username')
        .get(uploader.read_user);

    // List all Users

    app.route('/user/all')
        .get(uploader.list_users);

    // List all media

    app.route('/media')
        .get(uploader.list_media);

    // Create new media

    app.route('/create-media/media/new')
        .post(uploader.create_media);

    // Specific media

    app.route('/media/:_id')
        .get(uploader.read_media)
        .put(uploader.update_media)
        .delete(uploader.delete_media);

};