/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Abs, Lt, Divide, Subtract, Add, Multiply, Gt } from "ts-arithmetic";
 * @import { Sign } from "./sign.doc.js";
 * @import { Product } from "./_common/_exports.js";
 */

/**
 * @typedef {2.220446049250313e-16} Epsilon
 */

/**
 * @typedef {Divide<1, Epsilon>} InverseEpsilon
 */

/**
 * @template {number} NumberTemplate
 * @template {number} EpsilonTemplate
 * @template {number} MinimumTemplate
 * @typedef {(
 * Subtract<
 * 	Add<NumberTemplate, InverseEpsilon>,
 * 	InverseEpsilon
 * >
 * )} RoundTiesToEven
 */

/**
 * @template {number} NumberTemplate
 * @template {number} EpsilonTemplate
 * @typedef {(
 * Multiply<
 * 	Add<
 * 		1,
 * 		Divide<
 * 			EpsilonTemplate,
 * 			Epsilon
 * 		>
 * 	>,
 * 	NumberTemplate
 * >
 * )} FloatRoundMinuend
 */

/**
 * @template {number} NumberTemplate
 * @template {number} EpsilonTemplate
 * @typedef {(
 * Subtract<
 * 	FloatRoundMinuend<
 * 		NumberTemplate,
 * 		EpsilonTemplate
 * 	>,
 * 	Subtract<
 * 		FloatRoundMinuend<
 * 			NumberTemplate,
 * 			EpsilonTemplate
 * 		>,
 * 		NumberTemplate
 * 	>
 * >
 * )} FloatRoundHelper
 */

/**
 * @template {number} NumberTemplate
 * @template {number} EpsilonTemplate
 * @template {number} MaximumTemplate
 * @template {number} MinimumTemplate
 * @typedef {(
 * Lt<Abs<NumberTemplate>, MinimumTemplate> extends 1
 * 	? Product<[
 * 		Sign<NumberTemplate>,
 * 		RoundTiesToEven<
 * 			Divide<
 * 				Divide<Abs<NumberTemplate>, MinimumTemplate>,
 * 				EpsilonTemplate
 * 			>,
 * 			EpsilonTemplate,
 * 			MinimumTemplate
 * 		>,
 * 		MinimumTemplate,
 * 		EpsilonTemplate
 * 	]>
 * 	: Gt<
 * 		FloatRoundHelper<
 * 			Abs<NumberTemplate>,
 * 			EpsilonTemplate
 * 		>,
 * 		MaximumTemplate
 * 	> extends 1
 * 		? never
 * 		: Multiply<
 * 			Sign<NumberTemplate>,
 * 			FloatRoundHelper<
 * 				Abs<NumberTemplate>,
 * 				EpsilonTemplate
 * 			>
 * 		>
 * )} FloatRound
 */
