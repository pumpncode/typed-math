/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { GtOrEq, Gt, Add } from "ts-arithmetic";
 * @import { Round } from "@/library/_common/round.doc.js";
 * @import { DivideByPowerOfTen } from "./_common/divide-by-power-of-ten.doc.js";
 * @import { MultiplyByPowerOfTen } from "./_common/multiply-by-power-of-ten.doc.js";
 * @import { StringToArray } from "@/type-party/_exports.js";
 * @import { SliceToPrecision } from "./round-to-precision/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @template {number} PrecisionTemplate
 * @typedef {(
 * GtOrEq<PrecisionTemplate, 0> extends 1
 * 	? `${NumberTemplate}` extends `${string}.${infer DecimalPartTemplate extends string}`
 * 		? Gt<StringToArray<DecimalPartTemplate>["length"], PrecisionTemplate> extends 1
 * 			? DivideByPowerOfTen<
 * 				Round<
 * 					MultiplyByPowerOfTen<
 * 						SliceToPrecision<NumberTemplate, Add<PrecisionTemplate, 1>>,
 * 						PrecisionTemplate
 * 					>
 * 				>,
 * 				PrecisionTemplate
 * 			>
 * 			: NumberTemplate
 * 		: NumberTemplate
 * 	: never
 * )} RoundToPrecision
 */
