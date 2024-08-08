/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { ShiftDotRight } from "./multiply-by-ten/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * ShiftDotRight<`${NumberTemplate}`> extends `${infer Result extends number}`
 * 	? Result
 * 	: never
 * )} MultiplyByTen
 */
