/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { TrimZeros } from  "@/library/_common/_common/_common/trim-zeros.doc.js";
 * @import { Join } from  "@/type-party/_exports.js";
 */

/**
 * @template {string[]} FirstRest
 * @template {string} FirstLast
 * @template {string} SecondFirst
 * @template {string[]} SecondRest
 * @typedef {(
 * TrimZeros<
 * 	`${Join<FirstRest, "">}${FirstLast}${SecondFirst}.${Join<SecondRest, "">}${Join<SecondRest, ""> extends "" ? "0" : ""}`
 * >
 * )} ShiftDotRightHelper
 */
