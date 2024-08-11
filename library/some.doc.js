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
 * 	: TupleTemplate extends readonly [infer Head extends boolean, ...infer TailTemplate extends readonly boolean[]]
 * 		? Head extends TestTemplate
 * 			? true
 * 			: Some<TailTemplate>
 * 		: false
 * )} Some
 */
