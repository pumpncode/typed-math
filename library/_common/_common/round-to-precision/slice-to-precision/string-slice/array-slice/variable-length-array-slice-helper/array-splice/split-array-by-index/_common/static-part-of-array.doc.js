/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { UnknownArray } from "@/library/_common/_common/round-to-precision/slice-to-precision/string-slice/array-slice/variable-length-array-slice-helper/_common/unknown-array.doc.js";
 */

/**
 * @template {UnknownArray} T
 * @template {UnknownArray} [Result=[]]
 * @typedef {T extends unknown
 * 		? number extends T["length"] ?
 * 			T extends readonly [infer U, ...infer V]
 * 				? StaticPartOfArray<V, [...Result, U]>
 * 				: Result
 * 			: T
 * 		: never} StaticPartOfArray
 */
