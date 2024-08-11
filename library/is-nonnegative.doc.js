/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * `${NumberTemplate}` extends `-${number}`
 * 	? false
 * 	: true
 * )} IsNonnegative
 */
