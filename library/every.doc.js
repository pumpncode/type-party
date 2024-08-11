/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {readonly boolean[]} TupleTemplate
 * @template {unknown} [TestTemplate=true]
 * @typedef {(
 * TupleTemplate extends readonly TestTemplate[]
 * 	? true
 * 	: false
 * )} Every
 */
