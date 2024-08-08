/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { GtOrEq, Multiply } from "ts-arithmetic";
 * @import { Sum, Log } from "@/library/_common/_exports.js";
 * @import { AcoshTerm } from "./acosh/_exports.js";
 */

/**
 * @template {number} NumberXTemplate
 * @typedef {(
 * GtOrEq<NumberXTemplate, 1> extends 1
 * 	? Sum<[
 * 		Log<Multiply<2, NumberXTemplate>>,
 * 		AcoshTerm<NumberXTemplate, 1, 4, 2>,
 * 		AcoshTerm<NumberXTemplate, 3, 32, 4>,
 * 		AcoshTerm<NumberXTemplate, 5, 96, 6>,
 * 		AcoshTerm<NumberXTemplate, 35, 1024, 8>,
 * 		AcoshTerm<NumberXTemplate, 63, 2560, 10>,
 * 		AcoshTerm<NumberXTemplate, 77, 4096, 12>
 * 	]>
 * 	: never
 * )} Acosh
 */
