/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { PositiveIntegersUpTo, Product } from "./_common/_exports.js";
 */

/**
 * @typedef {({
 * 	0: 1,
 * 	1: 1,
 * 	2: 2,
 * 	3: 6,
 * 	4: 24,
 * 	5: 120,
 * 	6: 720,
 * 	7: 5_040,
 * 	8: 40_320,
 * 	9: 362_880,
 * 	10: 3_628_800,
 * 	11: 39_916_800
 * })} FactorialTable
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * 	NumberTemplate extends keyof FactorialTable
 * 		? FactorialTable[NumberTemplate]
 * 		: Product<
 * 			PositiveIntegersUpTo<NumberTemplate>
 * 		>
 * )} Factorial
 */
