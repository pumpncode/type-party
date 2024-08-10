/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { UnionToTupleHelper } from "./union-to-tuple/_exports.js";
 */

/**
 * @template {unknown} T
 * @typedef {(
 * UnionToTupleHelper<T> extends T[]
 * ? UnionToTupleHelper<T>
 * : never
 * )} UnionToTuple
 */
