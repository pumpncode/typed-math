/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Pow } from "ts-arithmetic";
 * @import { Sum } from "@/library/_common/sum.doc.js";
 * @import { Sqrt } from "@/library/_common/sqrt.doc.js";
 */

/**
 * @template {readonly number[]} TupleTemplate
 * @typedef {(
 * Sqrt<
 * 	Sum<{
 * 		[IndexTemplate in keyof TupleTemplate]: Pow<TupleTemplate[IndexTemplate], 2>
 * }>
 * >
 * )} Hypot
 */
