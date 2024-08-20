/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {boolean} A
 * @template {boolean} B
 * @typedef {(
 * A extends true
 * 	? B extends true
 * 		? true
 * 		: false
 * 	: false
 * )} And
 */
