// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    // avoid reloading on resize; just update stored client dimensions
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth !== clientWidth || newHeight !== clientHeight) {
        clientWidth = newWidth;
        clientHeight = newHeight;
        // do not force a page reload; let page scripts handle responsive redraw
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);



