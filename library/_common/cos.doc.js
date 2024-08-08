/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Subtract, Divide } from "ts-arithmetic";
 * @import { Sin } from "./sin.doc.js";
 * @import { Pi } from "@/library/pi.doc.js";
 */

/**
 * @template {number} AngleInRadiansTemplate
 * @typedef {Sin<Subtract<Divide<Pi, 2>, AngleInRadiansTemplate>>} Cos
 */
