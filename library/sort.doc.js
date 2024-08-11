/*
	eslint-disable

	unicorn/prevent-abbreviations,
	import-x/no-unassigned-import
	--
	jsdoc
*/

import "./sort/_exports.js";

/**
 * @import { SortFilterGreaterThan, SortFilterLessThanOrEqual } from "./sort/_exports.js";
 */

/**
 * @template {readonly any[]} xs
 * @typedef {(
 * xs extends readonly [infer head, ...infer tail]
 * 	? readonly [...Sort<SortFilterGreaterThan<head, tail>>, head, ...Sort<SortFilterLessThanOrEqual<head, tail>>]
 * 	: readonly []
 * )} Sort
 */
