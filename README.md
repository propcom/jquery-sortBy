# sortBy - a jQuery plugin#


This plugin allows you to easily sort a bunch of items using a simple function.

Currently it sorts the direct children of the selected thing.

## Usage

Simply call sortBy on any selector and pass in a function that returns a value
by which the items are to be compared. The function takes one parameter - the
item - and returns a piece of information about the item. TheSchwartzian
transform is then used to sort the list so collected and reorder the items
accordingly.

## Examples

    $('#parent-element').sortBy(function(a) {
		return $.trim(a.find(':header').eq(0).html());
	});

	$('#parent-element').sortBy(function(a) {
		return a.data('sort-order');
	});

## TODOs

1. Allow specifying of things to sort within the selected things
2. Iterate over the selector to sort many sets with one call
