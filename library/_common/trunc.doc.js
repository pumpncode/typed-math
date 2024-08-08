/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsInt } from "ts-arithmetic";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * IsInt<NumberTemplate> extends 1
 * 	? NumberTemplate
 * 	: `${NumberTemplate}` extends `${infer I extends number}.${string}`
 * 		? I
 * 		: NumberTemplate
 * )} Trunc
 */
