/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Add, Multiply, Pow } from "ts-arithmetic";
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
 * 		? Add<Head, AddChunks<Tail>>
 * 		: never
 * 	: 0
 * )} AddChunks
 */

/**
 * @template {readonly number[]} T
 * @template {number} [N=0]
 * @typedef {(
 * T extends readonly [infer Head, ...infer Tail]
 * 	? Head extends number
 * 		? Tail extends readonly number[]
 * 			? Add<Multiply<Pow<-1, N>, Head>, AlternatingSumHelper<Tail, Add<N, 1>>>
 * 			: never
 * 		: never
 * 	: 0
 * )} AlternatingSumHelper
 */

/**
 * @template {readonly number[]} T
 * @template {number} [N=10]
 * @typedef {(
 * T extends readonly []
 *   	? 0
 *   	: Chunk<T, N> extends infer C
 *   		? C extends readonly any[]
 *   			? AddChunks<{
 *   				[K in keyof C]: C[K] extends readonly number[] ? AlternatingSumHelper<C[K]> : never;
 *   			}>
 *   			: never
 *   		: never
 * )} AlternatingSum
 */
