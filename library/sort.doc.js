/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

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
