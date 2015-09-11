/*global frontEndLogin */

(function ($) {
	$("body").on('keyup', function(e) {
        if( e.keyCode == 116 && e.ctrlKey && e.shiftKey ) location.href = "/Security/login?BackURL=" + unescape(location.pathname);
	});
})(jQuery);