/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsInt, Negate, Subtract, IsNegative } from "ts-arithmetic";
 * @import { Trunc } from "./trunc.doc.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * IsInt<NumberTemplate> extends 1
 * 	? NumberTemplate
 * 	: Negate<Subtract<IsNegative<NumberTemplate>, Trunc<NumberTemplate>>>
 * )} Floor
 */
