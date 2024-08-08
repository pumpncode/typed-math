/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Divide } from "ts-arithmetic";
 * @import { Sin } from "@/library/_common/sin.doc.js";
 * @import { Cos } from "@/library/_common/cos.doc.js";
 */

/**
 * @template {number} AngleInRadiansTemplate
 * @typedef {Divide<Sin<AngleInRadiansTemplate>, Cos<AngleInRadiansTemplate>>} Tan
 */
