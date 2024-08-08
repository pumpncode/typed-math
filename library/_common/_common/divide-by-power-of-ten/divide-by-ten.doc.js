/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { ShiftDotLeft } from "./divide-by-ten/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * ShiftDotLeft<`${NumberTemplate}`> extends `${infer Result extends number}`
 * 	? Result
 * 	: never
 * )} DivideByTen
 */
