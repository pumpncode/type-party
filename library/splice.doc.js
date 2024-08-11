/*
	eslint-disable

	unicorn/prevent-abbreviations,
	import-x/no-unassigned-import
	--
	jsdoc
*/

import "./_common/_exports.js";
import "./splice/_exports.js";

/**
 * @import { UnknownArray } from "./_common/_exports.js";
 * @import { SplitArrayByIndex } from "./splice/_exports.js";
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
