/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Multiply, Divide, Pow, Add } from "ts-arithmetic";
 * @import { Factorial } from "@/library/_common/factorial.doc.js";
 */

/**
 * @template {number} NumberXTemplate
 * @template {number} NumberNTemplate
 * @typedef {(
 * Multiply<
 * 	Divide<
 * 		Pow<-1, NumberNTemplate>,
 * 		Factorial<Add<Multiply<NumberNTemplate, 2>, 1>>
 * 	>,
 * 	Pow<NumberXTemplate, Add<Multiply<NumberNTemplate, 2>, 1>>
 * >
 * )} SinTerm
 */
