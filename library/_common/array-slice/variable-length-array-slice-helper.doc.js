/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Gt } from "ts-arithmetic";
 * @import { And } from "@/library/and.doc.js";
 * @import { IsEqual } from "@/library/is-equal.doc.js";
 * @import { IsNegative } from "@/library/is-negative.doc.js";
 * @import { Not } from "@/library/not.doc.js";
 * @import { Splice } from "@/library/splice.doc.js";
 * @import { ArraySliceByPositiveIndex } from "./_common/_exports.js";
 */

/**
 * @template {readonly unknown[]} Array_
 * @template {number} Start
 * @template {number} End
 * @typedef {(
 * And<Not<IsNegative<Start>>, IsEqual<End, never>> extends true
 * 	? Splice<Array_, 0, Start>
 * 	: And<
 * 		And<Not<IsNegative<Start>>, Not<IsNegative<End>>>,
 * 		IsEqual<Gt<End, Start>, 1>
 * 	> extends true
 * 		? ArraySliceByPositiveIndex<Array_, Start, End>
 * 		: []
 * )} VariableLengthArraySliceHelper
 */
