/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { GtOrEq, Abs } from "ts-arithmetic";
 * @import { Sum } from "./sum.doc.js";
 * @import { AtanhTerm } from "./atanh/atanh-term.doc.js";
 */

/**
 * @template {number} NumberXTemplate
 * @typedef {(
 * GtOrEq<Abs<NumberXTemplate>, 1> extends 1
 * 	? never
 * 	: Sum<[
 * 		AtanhTerm<NumberXTemplate, 1>,
 * 		AtanhTerm<NumberXTemplate, 3>,
 * 		AtanhTerm<NumberXTemplate, 5>,
 * 		AtanhTerm<NumberXTemplate, 7>,
 * 		AtanhTerm<NumberXTemplate, 9>,
 * 		AtanhTerm<NumberXTemplate, 11>,
 * 		AtanhTerm<NumberXTemplate, 13>,
 * 		AtanhTerm<NumberXTemplate, 15>,
 * 		AtanhTerm<NumberXTemplate, 17>,
 * 		AtanhTerm<NumberXTemplate, 19>
 * 	]>
 * )} Atanh
 */
