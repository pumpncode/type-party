/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template U
 * @typedef {(U extends any ?
 *      (k: U) => void : never) extends
 *      (k: infer I extends U) => void ?
 *  I : never} UnionToIntersection
 */
