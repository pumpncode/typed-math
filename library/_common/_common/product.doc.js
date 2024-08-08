/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Multiply } from "ts-arithmetic";
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

/**
 * @template {readonly unknown[]} T
 * @typedef {(
 * T extends readonly [infer Head, ...infer Tail]
 * 	? Head extends number
 * 		? Multiply<Head, MultiplyChunks<Tail>>
 * 		: never
 * 	: 1
 * )} MultiplyChunks
 */

/**
 * @template {readonly number[]} T
 * @template {number} [N=0]
 * @typedef {(
 * T extends readonly [infer Head, ...infer Tail]
 * 	? Head extends number
 * 		? Tail extends readonly number[]
 * 			? Multiply<Head, ProductHelper<Tail, Multiply<N, 1>>>
 * 			: never
 * 		: never
 * 	: 1
 * )} ProductHelper
 */

/**
 * @template {readonly number[]} T
 * @template {number} [N=5]
 * @typedef {(
 * T extends readonly []
 *   	? 1
 *   	: Chunk<T, N> extends infer C
 *   		? C extends readonly any[]
 *   			? MultiplyChunks<{
 *   				[K in keyof C]: C[K] extends readonly number[] ? ProductHelper<C[K]> : never;
 *   			}>
 *   			: never
 *   		: never
 * )} Product
 */
