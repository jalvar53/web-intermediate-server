'use strict';

module.exports = function(app) {
    var mediaUploader = require('../controllers/rest-controller');

    // Create new user

    app.route('/user/new')
        .post(mediaUploader.create_user);

    // Check old user

    app.route('users')
        .get(mediaUploader.read_user);

    // List all media

    app.route('/media')
        .get(mediaUploader.list_media);

    // Create new media

    app.route('/create-media/media/new')
        .post(mediaUploader.create_media);

    // Specific media

    app.route('/media/:_id')
        .get(mediaUploader.read_media)
        .put(mediaUploader.update_media)
        .delete(mediaUploader.delete_media);

};