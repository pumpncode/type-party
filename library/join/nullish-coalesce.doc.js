/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { JoinableItem } from  "@/library/_common/joinable-item.doc.js";
 */

/**
 * @template {JoinableItem} Value
 * @template {string} Fallback
 * @typedef {Value extends null | undefined ? Fallback | NonNullable<Value> : Value} NullishCoalesce
 */
