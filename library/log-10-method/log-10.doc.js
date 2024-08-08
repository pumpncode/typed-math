/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { LtOrEq, Divide } from "ts-arithmetic";
 * @import { Log } from "@/library/_common/_exports.js";
 * @import { E } from "@/library/e.doc.js";
 * @import { Ln10 } from "@/library/ln-10.doc.js";
 * @import { Log10E } from "@/library/log-10-e.doc.js";
 */

/**
 * @typedef {({
 * 	1: 0,
 * 	10: 1,
 * 	100: 2,
 * 	1000: 3,
 * 	10000: 4,
 * 	100000: 5,
 * 	1000000: 6,
 * 	10000000: 7,
 * 	100000000: 8,
 * 	1000000000: 9,
 * 	10000000000: 10,
 * 	100000000000: 11,
 * 	1000000000000: 12
 * } & {
 * 	[key in E]: Log10E
 * })} Log10Table
 */

/**
 * @template {number} AntiLogarithmTemplate
 * @typedef {(
 * LtOrEq<AntiLogarithmTemplate, 0> extends 1
 * 	? never
 * 	: AntiLogarithmTemplate extends keyof Log10Table
 * 		? Log10Table[AntiLogarithmTemplate]
 * 		: Divide<
 * 			Log<AntiLogarithmTemplate>,
 * 			Ln10
 * 		>
 * )} Log10
 */
