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
 * @import { Split, ShiftDotRightHelper } from "./shift-dot-right/_exports.js";
 */

/**
 * @template {string} S
 * @typedef {(
 * 	S extends `${number}`
 * 		? S extends `${number}.${number}`
 * 			? Split<S, "."> extends [infer FirstPart extends string, infer SecondPart extends string]
 * 				? StringToArray<FirstPart> extends [...infer FirstRest extends string[], infer FirstLast extends string]
 * 					? StringToArray<SecondPart> extends [infer SecondFirst extends string, ...infer SecondRest extends string[]]
 * 						? ShiftDotRightHelper<
 * 							FirstRest,
 * 							FirstLast,
 * 							SecondFirst,
 * 							SecondRest
 * 						>
 * 						: never
 * 					: never
 * 				: never
 * 			: ShiftDotRight<`${S}.0`>
 * 		: never
 * )} ShiftDotRight
 */
