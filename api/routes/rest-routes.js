'use strict'

module.exports = function(app) {
    var mediaUploader = require('../controllers/rest-controller')

    // List all media

    app.route('/media')
        .get(mediaUploader.list_media);

    // Create new media

    app.route('/create-media/file/new')
        .post(mediaUploader.create_file);

    app.route('/create-media/video/new')
        .post(mediaUploader.create_video);

    app.route('/create-media/audio/new')
        .post(mediaUploader.create_audio);

    app.route('/create-media/image/new')
        .post(mediaUploader.create_image);

    // Specific media

    app.route('/create-media/file/:id')
        .get(mediaUploader.read_file)
        .put(mediaUploader.update_file)
        .delete(mediaUploader.delete_file);

    app.route('/create-media/video/:id')
        .get(mediaUploader.read_video)
        .put(mediaUploader.update_video)
        .delete(mediaUploader.delete_video);

    app.route('/create-media/audio/:id')
        .get(mediaUploader.read_audio)
        .put(mediaUploader.update_audio)
        .delete(mediaUploader.delete_audio);

    app.route('/create-media/image/:id')
        .get(mediaUploader.read_image)
        .put(mediaUploader.update_image)
        .delete(mediaUploader.delete_image);

}