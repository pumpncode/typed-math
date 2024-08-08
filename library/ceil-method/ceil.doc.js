/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { IsInt, Add } from "ts-arithmetic";
 * @import { Floor } from "@/library/_common/_exports.js";
 */

/**
 * @template {number} NumberTemplate
 * @typedef {(
 * IsInt<NumberTemplate> extends 1
 * 	? NumberTemplate
 * 	: Add<Floor<NumberTemplate>, 1>
 * )} Ceil
 */
