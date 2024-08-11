/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {number} L
 * @template [Fill=unknown]
 * @template {readonly unknown[]} [T=[]]
 * @typedef {T["length"] extends L
 * 	? T
 * 	: BuildTuple<L, Fill, [...T, Fill]>} BuildTuple
 */
