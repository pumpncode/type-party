/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { RangeHelper } from "./range/_exports.js";
 */

/**
 * @template L
 * @template H
 * @typedef {L | Exclude<RangeHelper<H>, RangeHelper<L>>} Range
 */
