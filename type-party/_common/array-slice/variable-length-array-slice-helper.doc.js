/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsNegative, Gt, And, Not } from "ts-arithmetic";
 * @import { IsEqual } from "./is-equal.doc.js";
 * @import { ArraySplice } from "@/type-party/array-splice.doc.js";
 * @import { ArraySliceByPositiveIndex } from "./_common/_exports.js";
 */

/**
 * @template {readonly unknown[]} Array_
 * @template {number} Start
 * @template {number} End
 * @typedef {And<Not<IsNegative<Start>>, IsEqual<End, never>> extends 1
 * 	? ArraySplice<Array_, 0, Start>
 * 	: And<
 * 		And<Not<IsNegative<Start>>, Not<IsNegative<End>>>,
 * 		IsEqual<Gt<End, Start>, 1>
 * 	> extends 1
 * 		? ArraySliceByPositiveIndex<Array_, Start, End>
 * 		: []} VariableLengthArraySliceHelper
 */
