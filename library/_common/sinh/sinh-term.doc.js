/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Divide, Pow, Add, Multiply } from "ts-arithmetic";
 * @import { Factorial } from "@/library/_common/factorial.doc.js";
 */

/**
 * @template {number} NumberXTemplate
 * @template {number} NumberNTemplate
 * @typedef {(
 * Divide<
 * 	Pow<NumberXTemplate, Add<Multiply<NumberNTemplate, 2>, 1>>,
 * 	Factorial<Add<Multiply<NumberNTemplate, 2>, 1>>
 * >
 * )} SinhTerm
 */
