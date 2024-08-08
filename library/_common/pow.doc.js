/*
    eslint-disable

    import-x/unambiguous,
    unicorn/no-empty-file,
    unicorn/prevent-abbreviations
    --
    jsdoc
*/

/**
 * @import { Pow as IntegerPow, Multiply, Divide, IsInt, Eq, Subtract, Add } from "ts-arithmetic";
 * @import { Log } from "./log.doc.js";
 * @import { Factorial } from "./factorial.doc.js";
 * @import { RoundToPrecision } from "./round-to-precision.doc.js";
 */

/**
 * @template {number} X
 * @template {number} N
 * @typedef {(
 *     Eq<N, 0> extends 1 ? 1 : Multiply<X, PowFractional<X, Subtract<N, 1>>>
 * )} PowFractional
 */

/**
 * @template {number} X
 * @template {number} N
 * @typedef {(
 *     Divide<PowFractional<X, N>, Factorial<N>>
 * )} Term
 */

/**
 * @template {number} X
 * @template {number} N
 * @typedef {(
 *     Eq<N, 0> extends 1
 *         ? 1
 *         : Add<Term<X, N>, ExpHelper<X, Subtract<N, 1>>>
 * )} ExpHelper
 */

/**
 * @template {number} X
 * @typedef {ExpHelper<X, 10>} Exp
 */

/**
 * @template {number} BaseTemplate
 * @template {number} ExponentTemplate
 * @typedef {(
 *     IsInt<ExponentTemplate> extends 1
 *         ? IntegerPow<RoundToPrecision<BaseTemplate, 9>, ExponentTemplate>
 *         : Exp<RoundToPrecision<Multiply<Log<RoundToPrecision<BaseTemplate,9>>, RoundToPrecision<ExponentTemplate,9>>,9>>
 * )} Pow
 */
