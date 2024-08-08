/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsNegative, Subtract, GtOrEq, LtOrEq, Negate, Pow } from "ts-arithmetic";
 * @import { Floor } from "@/library/_common/floor.doc.js";
 * @import { Log2 } from "@/library/_common/log-2.doc.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * IsNegative<NumberTemplate> extends 1
 * 	? LtOrEq<NumberTemplate, Negate<Pow<2, 32>>> extends 1
 * 		? 32
 * 		: 0
 * 	: NumberTemplate extends 0
 * 		? 32
 * 		: GtOrEq<NumberTemplate, Pow<2, 32>> extends 1
 * 			? 32
 * 			: Floor<Subtract<31, Log2<NumberTemplate>>>
 * )} Clz32
 */
