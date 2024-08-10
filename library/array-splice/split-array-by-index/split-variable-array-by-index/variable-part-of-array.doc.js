/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { UnknownArray } from "@/type-party/_common/array-slice/variable-length-array-slice-helper/_common/unknown-array.doc.js";
 * @import { StaticPartOfArray } from "@/library/array-splice/split-array-by-index/_common/static-part-of-array.doc.js";
 */

/**
 * @template {UnknownArray} T
 * @typedef {T extends unknown
 * 		? T extends readonly [...StaticPartOfArray<T>, ...infer U]
 * 			? U
 * 			: []
 * 		: never} VariablePartOfArray
 */
