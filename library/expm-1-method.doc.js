/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Pow, Subtract } from "ts-arithmetic";
 * @import { E } from "./e.doc.js";
 */

// TODO[2024-08-10]: Implement as series to support floats

/**
 * @typedef {(
 * <
 * 	NumberTemplate extends number
 * >(
 * 	number: NumberTemplate
 * ) => Subtract<Pow<E, NumberTemplate>, 1>
 * )} Expm1Method
 */
