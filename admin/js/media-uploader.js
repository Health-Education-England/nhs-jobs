/**
 * Load media uploader on pages with our custom metabox
 * https://gist.github.com/cferdinandi/86f6e326b30b8b5416c0a7e43271efa6
 */
 jQuery(document).ready(function($){

	'use strict';

	// Instantiates the variable that holds the media library frame.
	var metaImageFrame;

	// Runs when the media button is clicked.
	$( 'body' ).click(function(e) {

		// Get the btn
		var btn = e.target;

		// Check if it's the upload button
		if ( !btn || !$( btn ).attr( 'data-media-uploader-target' ) ) return;

		// Get the field target
		var field = $( btn ).data( 'media-uploader-target' );

		// Prevents the default action from occuring.
		e.preventDefault();

		// Sets up the media library frame
		metaImageFrame = wp.media.frames.metaImageFrame = wp.media({
			title: meta_image.title,
			button: { text:  'Use logo' },
		});

		// Runs when an image is selected.
		metaImageFrame.on('select', function() {

			// Grabs the attachment selection and creates a JSON representation of the model.
			var media_attachment = metaImageFrame.state().get('selection').first().toJSON();

			let url = media_attachment.sizes.medium ? media_attachment.sizes.medium.url : media_attachment.sizes.full.url;

			$('.partner-logo').attr('src', url );

			console.log( media_attachment );

			// Sends the attachment URL to our custom image input field.
			$( field ).val(media_attachment.id);

		});

		// Opens the media library frame.
		metaImageFrame.open();

	});

});