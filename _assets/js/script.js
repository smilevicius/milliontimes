(function($) {
	$(document).ready(function() {
		function time() {
			var date = new Date(),
				hours = date.getHours(),
				minutes = date.getMinutes(),
				seconds = date.getSeconds(),
				hour1 = Math.floor(hours / 10),
				hour2 = hours % 10,
				minute1 = Math.floor(minutes / 10),
				minute2 = minutes % 10,
				second1 = Math.floor(seconds / 10),
				second2 = seconds % 10;

			$('.hour1, .hour2, .minute1, .minute2, .second1, .second2').removeClass (function (index, css) {
			    return (css.match (/(^|\s)digit[0-9]/g) || []).join(' ');
			})
			$('.hour1').addClass('digit' + hour1);
			$('.hour2').addClass('digit' + hour2);
			$('.minute1').addClass('digit' + minute1);
			$('.minute2').addClass('digit' + minute2);
			$('.second1').addClass('digit' + second1);
			$('.second2').addClass('digit' + second2);

			setTimeout(time, 1000);
		}
		setTimeout(time, 1000)
	});
})(jQuery);