/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { UnknownArray } from "@/library/_common/unknown-array.doc.js";
 * @import { StaticPartOfArray } from "../_common/static-part-of-array.doc.js";
 */

/**
 * @template {UnknownArray} T
 * @typedef {T extends unknown
 * 		? T extends readonly [...StaticPartOfArray<T>, ...infer U]
 * 			? U
 * 			: []
 * 		: never} VariablePartOfArray
 */
