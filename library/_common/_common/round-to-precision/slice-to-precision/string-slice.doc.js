/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { StringToArray } from "@/library/_common/_common/string-to-array.doc.js";
 * @import { ArraySlice } from "./string-slice/_exports.js";
 * @import { Join } from "@/library/_common/_common/_common/join.doc.js";
 */

/**
 * @template {string} S
 * @template {number} [Start=0]
 * @template {number} [End=StringToArray<S>["length"]]
 * @typedef {string extends S
 * 	? string
 * 	: ArraySlice<StringToArray<S>, Start, End> extends infer R extends readonly string[]
 * 		? Join<R, "">
 * 		: never} StringSlice
 */
