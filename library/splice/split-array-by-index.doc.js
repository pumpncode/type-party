/*
	eslint-disable

	unicorn/prevent-abbreviations,
	import-x/no-unassigned-import
	--
	jsdoc
*/

import "./_common/_exports.js";
import "./split-array-by-index/_exports.js";

/**
 * @import { UnknownArray } from "@/library/_common/unknown-array.doc.js"
 * @import { SplitFixedArrayByIndex } from "./_common/_exports.js";
 * @import { SplitVariableArrayByIndex } from "./split-array-by-index/_exports.js";
 */

/**
 * @template {UnknownArray} T
 * @template {number} SplitIndex
 * @typedef {SplitIndex extends 0
 * 		? [[], T]
 * 		: number extends T["length"]
 * 			? SplitVariableArrayByIndex<T, SplitIndex>
 * 			: SplitFixedArrayByIndex<T, SplitIndex>} SplitArrayByIndex
 */
