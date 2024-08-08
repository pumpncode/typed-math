/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {string} S
 * @template {string} Delimiter
 * @typedef {S extends `${infer Head}${Delimiter}${infer Tail}`
 * 	? [Head, ...Split<Tail, Delimiter>]
 * 	: S extends Delimiter
 * 		? []
 * 		: [S]} Split
 */
