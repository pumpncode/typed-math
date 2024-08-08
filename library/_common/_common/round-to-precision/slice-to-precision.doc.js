/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { StringToNumber, StringSlice } from "./slice-to-precision/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @template {number} PrecisionTemplate
 * @typedef {(
 * `${NumberTemplate}` extends `${infer IntegerPartTemplate extends string}.${infer DecimalPartTemplate extends string}`
 * 	? StringToNumber<`${IntegerPartTemplate}${StringSlice<DecimalPartTemplate, 0, PrecisionTemplate> extends "" ? "" : `.${StringSlice<DecimalPartTemplate, 0, PrecisionTemplate>}` }`>
 * 	: never
 * )} SliceToPrecision
 */
