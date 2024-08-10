/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { StringSlice } from "./slice/_exports.js";
 * @import { ArraySlice } from "./_common/_exports.js";
 * @import { StringToArray } from "./string-to-array.doc.js";
 */

/**
 * @template {string|readonly unknown[]} StringOrArrayTemplate
 * @template {number} [StartTemplate=0]
 * @template {number} [EndTemplate=StringOrArrayTemplate extends string ? StringToArray<StringOrArrayTemplate>["length"] : StringOrArrayTemplate["length"]]
 * @typedef {(
 * StringOrArrayTemplate extends string
 * 	? StringSlice<StringOrArrayTemplate, StartTemplate, EndTemplate>
 * 	: StringOrArrayTemplate extends readonly unknown[]
 * 		? ArraySlice<StringOrArrayTemplate, StartTemplate, EndTemplate>
 * 		: never
 * )} Slice
 */
