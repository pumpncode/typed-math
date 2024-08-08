/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Subtract } from "ts-arithmetic";
 * @import { DivideByTen } from "./divide-by-power-of-ten/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @template {number} ExponentTemplate
 * @typedef {(
 * ExponentTemplate extends 0
 * 	? NumberTemplate
 * 	: DivideByPowerOfTen<
 * 		DivideByTen<NumberTemplate>,
 * 		Subtract<ExponentTemplate, 1>
 * 	>
 * )} DivideByPowerOfTen
 */
