/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template n
 * @template {any[]} [iterator=[]]
 * @typedef {iterator["length"] extends n
 *   	? iterator
 *   	: SortIterator<n, [any, ...iterator]>} SortIterator
 */
