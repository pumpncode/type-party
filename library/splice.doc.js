/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { UnknownArray } from "./_common/_exports.js";
 * @import { SplitArrayByIndex } from "./array-splice/_exports.js";
 */

/**
 * @template {UnknownArray} T
 * @template {number} Start
 * @template {number} DeleteCount
 * @template {UnknownArray} [Items=[]]
 * @typedef {SplitArrayByIndex<T, Start> extends [infer U extends UnknownArray, infer V extends UnknownArray]
 * 		? SplitArrayByIndex<V, DeleteCount> extends [infer _Deleted extends UnknownArray, infer X extends UnknownArray]
 * 			? [...U, ...Items, ...X]
 * 			: never // Should never happen
 * 		: never} Splice
 */
