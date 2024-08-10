/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsUnion, PopUnion } from "./union-to-tuple-helper/_exports.js";
 */

/**
 * @template {unknown} T
 * @template {unknown[]} [A=[]]
 * @typedef {(
 * IsUnion<T> extends true
 * 	? UnionToTupleHelper<
 * 		Exclude<T, PopUnion<T>>,
 * 		[PopUnion<T>, ...A]
 * 	>
 * 	: [T, ...A]
 * )} UnionToTupleHelper
 */
