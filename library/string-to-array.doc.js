/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {string} StringTemplate
 * @template {string[]} [ResultTemplate=[]]
 * @typedef {string extends StringTemplate
 * 	? never
 * 	: StringTemplate extends `${infer FirstCharacterTemplate}${infer RestTemplate}`
 * 		? StringToArray<RestTemplate, [...ResultTemplate, FirstCharacterTemplate]>
 * 		: ResultTemplate} StringToArray
 */
