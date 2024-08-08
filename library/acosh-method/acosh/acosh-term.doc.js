/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Negate, Divide, Multiply, Pow } from "ts-arithmetic";
 */

/**
 * @template {number} NumberXTemplate
 * @template {number} NumberATemplate
 * @template {number} NumberBTemplate
 * @template {number} NumberCTemplate
 * @typedef {(
 * Negate<
 * 	Divide<
 * 		NumberATemplate,
 * 		Multiply<
 * 			NumberBTemplate,
 * 			Pow<
 * 				NumberXTemplate,
 * 				NumberCTemplate
 * 			>
 * 		>
 * 	>
 * >
 * )} AcoshTerm
 */
