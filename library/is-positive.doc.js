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
 * NumberTemplate extends 0
 * 	? false
 * 	: `${NumberTemplate}` extends `-${number}`
 * 		? false
 * 		: true
 * )} IsPositive
 */
