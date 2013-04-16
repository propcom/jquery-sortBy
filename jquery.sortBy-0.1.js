/* uses schwartzian transform to sort the selected elements in-place */
(function($) {
	$.fn.sortBy = function(sortfn) {
		var values = [],
			$self = this;

		this.children().each(function(i,o) {
			values.push([ $(o), sortfn($(o)) ]);
		});

		values.sort(function(a,b) {
			return a[1] > b[1]  ? 1
				:  a[1] == b[1] ? 0
				:                -1;
		});

		$.each(values, function(_,o) {
			$self.append(o[0]);
		});
	};
})(jQuery);
