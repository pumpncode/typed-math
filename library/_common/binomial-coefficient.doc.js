/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Divide, Subtract, Add, Multiply, Pow } from "ts-arithmetic";
 * @import { Product, PositiveIntegersUpTo } from "./_common/_exports.js";
 * @import { Sum } from "./sum.doc.js";
 * @import { RoundToPrecision } from "./round-to-precision.doc.js";
 */

/**
 * @template {number} NTemplate
 * @template {readonly number[]} IntegersTemplate
 * @typedef {({
 * 	[IndexTemplate in keyof IntegersTemplate]: RoundToPrecision<
 * Divide<
 * 		Subtract<Add<NTemplate, 1>, IntegersTemplate[IndexTemplate]>,
 * 		IntegersTemplate[IndexTemplate]
 * 	>,
 * 6
 * >
 * })} BinomialCoefficientHelper
 */

/**
 * @template {number} NTemplate
 * @template {number} KTemplate
 * @typedef {(
 * KTemplate extends 0
 * 	? 1
 * 	: Product<
 * 		BinomialCoefficientHelper<
 * 			NTemplate,
 * 			PositiveIntegersUpTo<KTemplate>
 * 		>
 * 	>
 * )} BinomialCoefficient
 */
