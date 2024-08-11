/*
	eslint-disable

	unicorn/prevent-abbreviations,
	import-x/no-unassigned-import
	--
	jsdoc
*/

import "./sort-filter-greater-than/_exports.js";
import "./_common/_exports.js";

/**
 * @import { SortIterator } from "./_common/_exports.js";
 * @import { SortGreaterThan } from "./sort-filter-greater-than/_exports.js";
 */

/**
 * @template value
 * @template {any[]} xs
 * @template {any[]} [output=[]]
 * @typedef {(
 * xs extends [infer head, ...infer tail]
 * 	? SortGreaterThan<SortIterator<value>, SortIterator<head>> extends true
 * 		? [...output, head, ...SortFilterGreaterThan<value, tail, output>]
 * 		: [...output, ...SortFilterGreaterThan<value, tail, output>]
 * 	: []
 * )} SortFilterGreaterThan
 */
