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
 * @import { Ln2 } from "@/library/ln-2.doc.js";
 * @import { Log2E } from "@/library/log-2-e.doc.js";
 */

/**
 * @typedef {({
 * 	1: 0,
 * 	2: 1,
 * 	4: 2,
 * 	8: 3,
 * 	16: 4,
 * 	32: 5,
 * 	64: 6,
 * 	128: 7,
 * 	256: 8,
 * 	512: 9,
 * 	1024: 10,
 * 	2048: 11,
 * 	4096: 12
 * } & {
 * 	[key in E]: Log2E
 * })} Log2Table
 */

/**
 * @template {number} AntiLogarithmTemplate
 * @typedef {(
 * LtOrEq<AntiLogarithmTemplate, 0> extends 1
 * 	? never
 * 	: AntiLogarithmTemplate extends keyof Log2Table
 * 		? Log2Table[AntiLogarithmTemplate]
 * 		: Divide<
 * 			Log<AntiLogarithmTemplate>,
 * 			Ln2
 * 		>
 * )} Log2
 */
