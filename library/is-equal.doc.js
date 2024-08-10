/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template A
 * @template B
 * @typedef {(
 * (<G>() => G extends A ? 1 : 2) extends (<G>() => G extends B ? 1 : 2)
 * 	? 1
 * 	: 0
 * )} IsEqual
 */
