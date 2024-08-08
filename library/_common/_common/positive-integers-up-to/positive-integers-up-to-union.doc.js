/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { GtOrEq } from "ts-arithmetic";
 * @import { NumberRange } from "./positive-integers-up-to-union/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {GtOrEq<NumberTemplate, 1> extends 1 ? NumberRange<1, NumberTemplate> : number} PositiveIntegersUpToUnion
 */
