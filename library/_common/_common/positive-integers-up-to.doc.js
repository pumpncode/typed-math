/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Sort, UnionToTuple, PositiveIntegersUpToUnion } from "./positive-integers-up-to/_exports.js";
 * @import {GtOrEq} from "ts-arithmetic";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * GtOrEq<NumberTemplate, 1> extends 1
 * 	? Sort<
 * 		UnionToTuple<
 * 			PositiveIntegersUpToUnion<NumberTemplate>
 * 		>
 * 	>
 * 	: never
 * )} PositiveIntegersUpTo
 */
