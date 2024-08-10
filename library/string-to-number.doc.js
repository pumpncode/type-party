/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {string} StringTemplate
 * @typedef {(
 * StringTemplate extends `${infer NumberTemplate extends number}`
 * 	? StringTemplate extends "-0"
 * 		? 0
 * 		: NumberTemplate
 * 	: never
 * )} StringToNumber
 */
