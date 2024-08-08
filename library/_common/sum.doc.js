/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Add } from "ts-arithmetic";
 * @import { Chunk } from "./_common/_exports.js";
 */

/**
 * @template {readonly unknown[]} T
 * @typedef {(
 * T extends readonly [infer Head, ...infer Tail]
 * 	? Head extends number
 * 		? Add<Head, SumChunks<Tail>>
 * 		: never
 * 	: 0
 * )} SumChunks
 */

/**
 * @template {readonly number[]} T
 * @template {number} [N=0]
 * @typedef {(
 * T extends readonly [infer Head, ...infer Tail]
 * 	? Head extends number
 * 		? Tail extends readonly number[]
 * 			? Add<Head, SumHelper<Tail, Add<N, 1>>>
 * 			: never
 * 		: never
 * 	: 0
 * )} SumHelper
 */

/**
 * @template {readonly number[]} T
 * @template {number} [N=5]
 * @typedef {(
 * T extends readonly []
 *   	? 0
 *   	: Chunk<T, N> extends infer C
 *   		? C extends readonly any[]
 *   			? SumChunks<{
 *   				[K in keyof C]: C[K] extends readonly number[] ? SumHelper<C[K]> : never;
 *   			}>
 *   			: never
 *   		: never
 * )} Sum
 */
