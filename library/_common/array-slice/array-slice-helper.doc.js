/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { LtOrEq, IsNegative, GtOrEq, Add } from "ts-arithmetic";
 * @import { Min } from "@/library/_common/min.doc.js";
 * @import { ArraySliceByPositiveIndex } from "./_common/_exports.js";
 */

/**
 * @template {number} Start
 * @template {number} ArrayLength
 * @typedef {(
 * IsNegative<Start> extends 1
 * 		? Add<ArrayLength, Start> extends infer AddResult extends number
 * 			? number extends AddResult
 * 				? 0
 * 				: AddResult
 * 			: never
 * 		: Start
 * )} DefaultPositiveS
 */

/**
 * @template {readonly unknown[]} Array_
 * @template {number} [Start=0]
 * @template {number} [End=Array_["length"]]
 * @template {Array<Array_[number]>} [TraversedElement=[]]
 * @template {Array<Array_[number]>} [Result=[]]
 * @template {number} [ArrayLength=Array_["length"]]
 * @template {number} [PositiveS=DefaultPositiveS<Start, ArrayLength>]
 * @template {number} [PositiveE=IsNegative<End> extends 1 ? Add<ArrayLength, End> : End]
 * @typedef {(
 * 1 extends [IsNegative<PositiveS>, LtOrEq<PositiveE, PositiveS>, GtOrEq<PositiveS, ArrayLength>][number]
 * 	? []
 * 	: ArraySliceByPositiveIndex<Array_, Min<[PositiveS, ArrayLength]>, Min<[PositiveE, ArrayLength]>>
 * )} ArraySliceHelper
 */
