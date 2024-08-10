/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { SortLessThanOrEqual } from "./sort-filter-less-than-or-equal/_exports.js";
 * @import { SortIterator } from "./_common/_exports.js";
 */

/**
 * @template value
 * @template {any[]} xs
 * @template {any[]} [output=[]]
 * @typedef {(
 * xs extends [infer head, ...infer tail]
 * 	? SortLessThanOrEqual<SortIterator<value>, SortIterator<head>> extends true
 * 		? [...output, head, ...SortFilterLessThanOrEqual<value, tail, output>]
 * 		: [...output, ...SortFilterLessThanOrEqual<value, tail, output>]
 * 	: []
 * )} SortFilterLessThanOrEqual
 */
