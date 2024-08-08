/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Divide, Pow, Multiply } from "ts-arithmetic";
 * @import { Factorial } from "@/library/_common/factorial.doc.js";
 */

/**
 * @template {number} NumberXTemplate
 * @template {number} NumberNTemplate
 * @typedef {(
 * Divide<
 * 	Pow<NumberXTemplate, Multiply<NumberNTemplate, 2>>,
 * 	Factorial<Multiply<NumberNTemplate, 2>>
 * >
 * )} CoshTerm
 */
