/*
	eslint-disable

	unicorn/prevent-abbreviations,
	import-x/no-unassigned-import
	--
	jsdoc
*/

import "./sort-filter-less-than-or-equal/_exports.js";
import "./_common/_exports.js";

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
