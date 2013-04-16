/* uses schwartzian transform to sort the selected elements in-place */
(function($) {
	$.fn.sortBy = function(sortfn) {
		var values = [],
			$self = this;

		values = this.children().map(function(o) {
			return [ $(o), sortfn($(o)) ];
		});

		$.sort(values, function(a,b) {
			return a[1] > b[1]  ? 1
				:  a[1] == b[1] ? 0
				:                -1;
		});

		$.each(values, function(_,o) {
			$self.append(o[0]);
		});
	};
})(jQuery);
