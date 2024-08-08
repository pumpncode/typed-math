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
 */

/**
 * @template {number} YTemplate
 * @template {number} XTemplate
 * @template {number} NTemplate
 * @typedef {(
 * Divide<
 * 	Pow<YTemplate, Add<Multiply<2, NTemplate>, 1>>,
 * 	Multiply<
 * 		Add<Multiply<2, NTemplate>, 1>,
 * 		Pow<XTemplate, Add<Multiply<2, NTemplate>, 1>>
 * 	>
 * >
 * )} Atan2Term
 */
