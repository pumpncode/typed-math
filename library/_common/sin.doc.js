/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Sum } from "./sum.doc.js";
 * @import { SinTerm } from "./sin/_exports.js";
 */

/**
 * @template {number} AngleInRadiansTemplate
 * @typedef {(
 * Sum<[
 * 	SinTerm<AngleInRadiansTemplate, 0>,
 * 	SinTerm<AngleInRadiansTemplate, 1>,
 * 	SinTerm<AngleInRadiansTemplate, 2>,
 * 	SinTerm<AngleInRadiansTemplate, 3>,
 * 	SinTerm<AngleInRadiansTemplate, 4>,
 * 	SinTerm<AngleInRadiansTemplate, 5>,
 * 	SinTerm<AngleInRadiansTemplate, 6>
 * ]>
 * )} Sin
 */
