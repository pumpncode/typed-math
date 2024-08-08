/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { And } from "ts-arithmetic";
 * @import { IsEqual, VariableLengthArraySliceHelper, ArraySliceHelper } from "./array-slice/_exports.js";
 */

/**
 * @template {readonly unknown[]} Array_
 * @template {number} [Start=never]
 * @template {number} [End=never]
 * @typedef {And<IsEqual<Start, never>, IsEqual<End, never>> extends 1
 * 	? Array_
 * 	: number extends Array_["length"]
 * 		? VariableLengthArraySliceHelper<Array_, Start, End>
 * 		: ArraySliceHelper<Array_, IsEqual<Start, never> extends 1 ? 0 : Start, IsEqual<End, never> extends 1 ? Array_["length"] : End>} ArraySlice
 */
