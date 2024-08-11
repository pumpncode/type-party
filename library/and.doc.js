/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {true|false} A
 * @template {true|false} B
 * @typedef {(
 * A extends true
 * 	? B extends true
 * 		? true
 * 		: false
 * 	: false
 * )} And
 */
