(function($, jQuery) {
	jQuery.fn.productOwner = function(options) {
		options = jQuery.extend({}, jQuery.fn.productOwner.options, options);

		$(options.postUserStoryTextarea).on('keyup', function(event) {
			var postUserStoryButton;

			postUserStoryButton = $(options.postUserStoryButton);

			if ($(event.target).val().length > 0) {
				postUserStoryButton.removeAttr('disabled');
			} else {
				postUserStoryButton.attr('disabled', 'disabled')
			}
		});

		$(options.postUserStoryButton).on('click', function(event) {
			var postUserStoryTextarea,
				postUserstoryData;

			event.preventDefault();
			postUserStoryTextarea = $(options.postUserStoryTextarea);
			postUserstoryData = {
				type: 'post-userstory',
				userstory: postUserStoryTextarea.val()
			}

			window.managedSocket.send(JSON.stringify(postUserstoryData));
			postUserStoryTextarea.val("");
			$(options.editUserStoryButton).removeAttr('disabled');
		});

		$(options.editUserStoryButton).on('click', function(event) {
			var postUserStoryTextarea,
				userStoryText;

			postUserStoryTextarea = $(options.postUserStoryTextarea);
			userStoryTextarea = $(options.userStoryText);

			postUserStoryTextarea.val(userStoryTextarea.html().removeBr());
		});
	};

	jQuery.fn.productOwner.options = {
		postUserStoryTextarea: null,
		postUserStoryButton: null,
		editUserStoryButton: null,
		userStoryText: null
	};
})(jQuery, jQuery);