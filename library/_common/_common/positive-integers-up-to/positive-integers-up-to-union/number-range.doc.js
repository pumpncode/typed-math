/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { NumberRangeHelper } from "./number-range/_exports.js";
 */

/**
 * @template L
 * @template H
 * @typedef {L | Exclude<NumberRangeHelper<H>, NumberRangeHelper<L>>} NumberRange
 */
