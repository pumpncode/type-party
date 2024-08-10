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
 * @import { BuildTuple } from "./build-tuple.doc.js";
 */

/**
 * @template {UnknownArray} T
 * @template {number} SplitIndex
 * @typedef {SplitIndex extends 0
 * 	? [[], T]
 * 	: T extends readonly [...BuildTuple<SplitIndex>, ...infer V]
 * 		? T extends readonly [...infer U, ...V]
 * 			? [U, V]
 * 			: [never, never]
 * 		: [never, never]} SplitFixedArrayByIndex
 */
