/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { SortDropOne } from "@/library/_common/_common/positive-integers-up-to/sort/_common/sort-drop-one.doc.js";
 */

/**
 * @template {any[]} a
 * @template {any[]} b
 * @typedef {(
 * [a, b] extends [[], [any, ...any]]
 * 	? true
 * 	: [a, b] extends [[any, ...any], []]
 * 		? false
 * 		: [a, b] extends [[], []]
 * 			? true
 * 			: SortLessThanOrEqual<SortDropOne<a>, SortDropOne<b>>
 * )} SortLessThanOrEqual
 */
