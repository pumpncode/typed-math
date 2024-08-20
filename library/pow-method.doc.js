/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Pow } from "ts-arithmetic";
 */

// TODO[2024-08-15]: Implement fully using binomial coefficient or factorial (https://www.wolframalpha.com/input?i=series+x%5Ey).

/**
 * @typedef {(
 * <
 * 	BaseTemplate extends number,
 * 	ExponentTemplate extends number
 * >(
 * 	base: BaseTemplate,
 * 	exponent: ExponentTemplate
 * ) => Pow<BaseTemplate, ExponentTemplate>
 * )} PowMethod
 */
