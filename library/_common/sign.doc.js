/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsPositive, IsNegative } from "ts-arithmetic";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * NumberTemplate extends 0
 * 	? 0
 * 	: IsPositive<NumberTemplate> extends 1
 * 		? 1
 * 		: IsNegative<NumberTemplate> extends 1
 * 			? -1
 * 			: never
 * )} Sign
 */
