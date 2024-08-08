/*
    eslint-disable

    import-x/unambiguous,
    unicorn/no-empty-file,
    unicorn/prevent-abbreviations
    --
    jsdoc
*/

/**
 * @import { Lt, Divide, Multiply, Add, Eq, Subtract } from "ts-arithmetic";
 * @import { RoundToPrecision } from "@/library/_common/_common/round-to-precision.doc.js";
 */

/**
 * @typedef {({
 *     0: 0,
 *     1: 1,
 *     8: 2,
 *     27: 3,
 *     64: 4,
 *     125: 5,
 *     216: 6,
 *     343: 7,
 *     512: 8,
 *     729: 9,
 *     1000: 10,
 *     1331: 11,
 *     1728: 12
 * })} CbrtTable
 */

/**
 * @template {number} Low
 * @template {number} High
 * @typedef {Divide<Add<Low, High>, 2>} Mid
 */

/**
 * @template {number} N
 * @template {number} Low
 * @template {number} High
 * @typedef {(
 * Lt<Subtract<High, Low>, 0.00000001> extends 1
 * 	? RoundToPrecision<Divide<Add<High, Low>, 2>, 8>
 * 	: CbrtIteration<N, Low, High>
 * )} CbrtHelper
 */

/**
 * @template {number} N
 * @template {number} Low
 * @template {number} High
 * @typedef {(
 * Eq<Multiply<Multiply<Mid<Low, High>, Mid<Low, High>>, Mid<Low, High>>, N> extends 1
 * 	? Mid<Low, High>
 * 	: Lt<Multiply<Multiply<Mid<Low, High>, Mid<Low, High>>, Mid<Low, High>>, N> extends 1
 * 		? CbrtHelper<N, Mid<Low, High>, High>
 * 		: CbrtHelper<N, Low, Mid<Low, High>>
 * )} CbrtIteration
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * 	NumberTemplate extends keyof CbrtTable
 * 		? CbrtTable[NumberTemplate]
 * 		: CbrtHelper<NumberTemplate, 1, NumberTemplate>
 * )} Cbrt
 */
