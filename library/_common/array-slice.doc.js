/*
	eslint-disable

	unicorn/prevent-abbreviations,
	import-x/no-unassigned-import
	--
	jsdoc
*/

import "./array-slice/_exports.js";

/**
 * @import { VariableLengthArraySliceHelper, ArraySliceHelper } from "./array-slice/_exports.js";
 * @import { IsEqual } from "@/library/is-equal.doc.js";
 * @import { And } from "@/library/and.doc.js";
 */

/**
 * @template {readonly unknown[]} Array_
 * @template {number} [Start=never]
 * @template {number} [End=never]
 * @typedef {(
 * And<IsEqual<Start, never>, IsEqual<End, never>> extends true
 * 	? Array_
 * 	: number extends Array_["length"]
 * 		? VariableLengthArraySliceHelper<Array_, Start, End>
 * 		: ArraySliceHelper<Array_, IsEqual<Start, never> extends 1 ? 0 : Start, IsEqual<End, never> extends 1 ? Array_["length"] : End>
 * )} ArraySlice
 */
