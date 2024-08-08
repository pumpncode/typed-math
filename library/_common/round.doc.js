/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsInt, IsNegative, Negate, Subtract, Gt, Multiply, Mod, Abs, Add, GtOrEq } from "ts-arithmetic";
 * @import { Trunc } from "@/library/_common/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * IsInt<NumberTemplate> extends 1
 * 	? NumberTemplate
 * 	: (
 * 		IsNegative<NumberTemplate> extends 1
 * 			? Negate<Subtract<Gt<Multiply<Mod<Abs<NumberTemplate>, 1>, 10>, 5>, Trunc<NumberTemplate>>>
 * 			: Add<GtOrEq<Multiply<Mod<NumberTemplate, 1>, 10>, 5>, Trunc<NumberTemplate>>
 * 	)
 * )} Round
 */
