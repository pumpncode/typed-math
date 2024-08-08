/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

// /** @typedef {import('./unknown-array').UnknownArray} UnknownArray */

/**
 * @import { SplitFixedArrayByIndex } from "./_common/_exports.js";
 * @import { SplitVariableArrayByIndex } from "./split-array-by-index/_exports.js";
 * @import { UnknownArray } from "@/library/_common/_common/round-to-precision/slice-to-precision/string-slice/array-slice/variable-length-array-slice-helper/_common/unknown-array.doc.js"
 */

/**
 * @template {UnknownArray} T
 * @template {number} SplitIndex
 * @typedef {SplitIndex extends 0
 * 		? [[], T]
 * 		: number extends T["length"]
 * 			? SplitVariableArrayByIndex<T, SplitIndex>
 * 			: SplitFixedArrayByIndex<T, SplitIndex>} SplitArrayByIndex
 */
