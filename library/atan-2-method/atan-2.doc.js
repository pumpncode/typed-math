/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { Gt, Lt, Divide, Negate } from "ts-arithmetic";
 * @import { Pi } from "@/library/_exports.js";
 * @import { AlternatingSum } from "@/library/_common/_exports.js";
 * @import { Atan2Term } from "./atan-2/_exports.js";
 */

/**
 * @template {number} YTemplate
 * @template {number} XTemplate
 * @typedef {(
 * XTemplate extends 0
 * 	? Gt<YTemplate, 0> extends 1
 * 		? Divide<Pi, 2>
 * 		: Lt<YTemplate, 0> extends 1
 * 			? Negate<Divide<Pi, 2>>
 * 			: 0
 * 	: AlternatingSum<[
 * 		Atan2Term<YTemplate, XTemplate, 0>,
 * 		Atan2Term<YTemplate, XTemplate, 1>,
 * 		Atan2Term<YTemplate, XTemplate, 2>,
 * 		Atan2Term<YTemplate, XTemplate, 3>,
 * 		Atan2Term<YTemplate, XTemplate, 4>,
 * 		Atan2Term<YTemplate, XTemplate, 5>,
 * 		Atan2Term<YTemplate, XTemplate, 6>
 * 	]>
 * )} Atan2
 */
