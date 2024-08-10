/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { StringToArray } from "@/library/string-to-array.doc.js";
 * @import { ArraySlice } from "@/library/_common/array-slice.doc.js";
 * @import { Join } from "@/library/join.doc.js";
 */

/**
 * @template {string} S
 * @template {number} [Start=0]
 * @template {number} [End=StringToArray<S>["length"]]
 * @typedef {string extends S
 * 	? string
 * 	: ArraySlice<StringToArray<S>, Start, End> extends infer R extends readonly string[]
 * 		? Join<R, "">
 * 		: never} StringSlice
 */
