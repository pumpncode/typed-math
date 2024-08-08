/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { StringToNumber, Slice } from "@/type-party/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @template {number} PrecisionTemplate
 * @typedef {(
 * `${NumberTemplate}` extends `${infer IntegerPartTemplate extends string}.${infer DecimalPartTemplate extends string}`
 * 	? StringToNumber<`${IntegerPartTemplate}${Slice<DecimalPartTemplate, 0, PrecisionTemplate> extends "" ? "" : `.${Slice<DecimalPartTemplate, 0, PrecisionTemplate>}` }`>
 * 	: never
 * )} SliceToPrecision
 */
