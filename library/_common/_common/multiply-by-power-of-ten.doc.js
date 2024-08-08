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
 * @import { MultiplyByTen } from "./multiply-by-power-of-ten/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @template {number} ExponentTemplate
 * @typedef {(
 * ExponentTemplate extends 0
 * 	? NumberTemplate
 * 	: MultiplyByPowerOfTen<
 * 		MultiplyByTen<NumberTemplate>,
 * 		Subtract<ExponentTemplate, 1>
 * 	>
 * )} MultiplyByPowerOfTen
 */
