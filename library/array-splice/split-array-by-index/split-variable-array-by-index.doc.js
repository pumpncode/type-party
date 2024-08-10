/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { GtOrEq, Subtract } from "ts-arithmetic";
 * @import { SplitFixedArrayByIndex } from "@/library/array-splice/_common/split-fixed-array-by-index.doc.js";
 * @import { UnknownArray } from "@/library/_common/array-slice/variable-length-array-slice-helper/_common/unknown-array.doc.js";
 * @import { BuildTuple } from "@/library/array-splice/_common/build-tuple.doc.js";
 * @import { VariablePartOfArray } from "./split-variable-array-by-index/_exports.js";
 * @import { StaticPartOfArray } from "./_common/_exports.js";
 */

/**
 * @template {UnknownArray} T
 * @template {number} SplitIndex
 * @template [T1=Subtract<SplitIndex, StaticPartOfArray<T>["length"]>] - The type of the first part of the split array.
 * @template [T2=T1 extends number ? BuildTuple<T1, VariablePartOfArray<T>[number]> : []] - The type of the second part of the split array.
 * @typedef {(
 * SplitIndex extends 0
 * 	? [[], T]
 * 	: GtOrEq<StaticPartOfArray<T>["length"], SplitIndex> extends 1
 * 		? [
 * 			SplitFixedArrayByIndex<StaticPartOfArray<T>, SplitIndex>[0],
 * 			[
 * 				...SplitFixedArrayByIndex<StaticPartOfArray<T>, SplitIndex>[1],
 * 				...VariablePartOfArray<T>
 * 			]
 * 		]
 * 		: [
 * 			[
 * 				...StaticPartOfArray<T>,
 * 				...(T2 extends UnknownArray ? T2 : [])
 * 			],
 * 			VariablePartOfArray<T>
 * 		]
 * )} SplitVariableArrayByIndex
 */
