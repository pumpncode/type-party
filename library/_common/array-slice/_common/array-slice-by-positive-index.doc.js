/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Add } from "ts-arithmetic";
 */

/**
 * @template {readonly unknown[]} Array_
 * @template {number} Start
 * @template {number} End
 * @template {Array<Array_[number]>} [Result=[]]
 * @typedef {(
 * Start extends End
 * 	? Result
 * 	: ArraySliceByPositiveIndex<Array_, Add<Start, 1>, End, [...Result, Array_[Start]]>
 * )} ArraySliceByPositiveIndex
 */
