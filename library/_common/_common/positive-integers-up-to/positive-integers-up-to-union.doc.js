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
 * @import { Range } from "@pumpn/type-party";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {GtOrEq<NumberTemplate, 1> extends 1 ? Range<1, NumberTemplate> : number} PositiveIntegersUpToUnion
 */
