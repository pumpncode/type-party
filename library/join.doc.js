/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { JoinableItem } from  "./_common/_exports.js";
 * @import { NullishCoalesce } from  "./join/_exports.js";
 */

/**
 * @template {readonly JoinableItem[]} Items
 * @template {string} Delimiter
 * @typedef {Items extends readonly []
 * 	? ""
 * 	: Items extends readonly [JoinableItem?]
 * 		? `${NullishCoalesce<Items[0], "">}`
 * 		: Items extends readonly [
 * 			infer First extends JoinableItem,
 * 			...infer Tail extends readonly JoinableItem[]
 * 		]
 * 			? `${NullishCoalesce<First, "">}${Delimiter}${Join<Tail, Delimiter>}`
 * 			: Items extends readonly [
 * 				...infer Head extends readonly JoinableItem[],
 * 				infer Last extends JoinableItem
 * 			]
 * 				? `${Join<Head, Delimiter>}${Delimiter}${NullishCoalesce<Last, "">}`
 * 				: string} Join
 */
