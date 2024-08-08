/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Min as MinOfTwo } from "ts-arithmetic";
 */

/**
 * @template {number[]} TupleTemplate
 * @typedef {TupleTemplate extends [infer First extends number, ...infer Rest extends number[]]
 * 	? Rest["length"] extends 0
 * 		? First
 * 		: MinOfTwo<First, Min<Rest>>
 * 	: never} Min
 */
