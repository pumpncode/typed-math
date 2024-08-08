/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {readonly any[]} T
 * @template {number} N
 * @template {readonly any[]} [Swap=[]]
 * @typedef {(
 * Swap["length"] extends N
 * 	? [Swap, ...Chunk<T, N>]
 * 	: T extends readonly [infer K, ...infer L]
 * 		? Chunk<L, N, readonly [...Swap, K]>
 * 		: Swap extends readonly [] ? Swap : readonly [Swap]
 * )} Chunk
 */
