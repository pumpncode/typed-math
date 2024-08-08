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
 * @typedef {(
 * StringTemplate extends `${infer Sign extends "-" | ""}${"0"}${infer Rest}`
 * 	? Rest extends `${"."}${string}`
 * 		? StringTemplate
 * 		: `${Sign}${TrimStartZeros<Rest>}`
 * 	: StringTemplate
 * )} TrimStartZeros
 */
