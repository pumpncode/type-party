/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template L
 * @template {any[]} [C=[]]
 * @template [R=L]
 * @typedef {(
 * C["length"] extends L
 * ? R
 * : RangeHelper<L, [...C, 0], C["length"] | R>
 * )} RangeHelper
 */
