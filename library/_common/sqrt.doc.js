/*
    eslint-disable

    import-x/unambiguous,
    unicorn/no-empty-file,
    unicorn/prevent-abbreviations
    --
    jsdoc
*/

/**
 * @import { SqrtOfOneHalf } from "@/library/sqrt-of-one-half.doc.js";
 * @import { SqrtOfTwo } from "@/library/sqrt-of-two.doc.js";
 * @import { Lt, Divide, Multiply, Add, Eq, Subtract } from "ts-arithmetic";
 * @import { RoundToPrecision } from "./round-to-precision.doc.js";
 */

/**
 * @typedef {({
 *     0: 0,
 *     0.5: SqrtOfOneHalf,
 *     1: 1,
 *     2: SqrtOfTwo,
 *     4: 2,
 *     9: 3,
 *     16: 4,
 *     25: 5,
 *     36: 6,
 *     49: 7,
 *     64: 8,
 *     81: 9,
 *     100: 10,
 *     121: 11,
 *     144: 12
 * })} SqrtTable
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
 *     Eq<Multiply<Mid<Low, High>, Mid<Low, High>>, N> extends 1
 *         ? Mid<Low, High>
 *         : Lt<Multiply<Mid<Low, High>, Mid<Low, High>>, N> extends 1
 *             ? SqrtHelper<N, Mid<Low, High>, High>
 *             : SqrtHelper<N, Low, Mid<Low, High>>
 * )} SqrtIteration
 */

/**
 * @template {number} N
 * @template {number} Low
 * @template {number} High
 * @typedef {(
 *     Lt<Subtract<High, Low>, 0.00000001> extends 1
 *         ? RoundToPrecision<Divide<Add<High, Low>, 2>, 8>
 *         : SqrtIteration<N, Low, High>
 * )} SqrtHelper
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 *     NumberTemplate extends keyof SqrtTable
 *         ? SqrtTable[NumberTemplate]
 *         : SqrtHelper<NumberTemplate, 1, NumberTemplate>
 * )} Sqrt
 */
