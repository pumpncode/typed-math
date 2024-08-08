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
 * @import { Join } from  "@/library/_common/_common/_common/join.doc.js";
 */

/**
 * @template {string[]} FirstRest
 * @template {string} FirstLast
 * @template {string} SecondFirst
 * @template {string[]} SecondRest
 * @typedef {(
 * TrimZeros<`${Join<FirstRest, ""> extends "" ? "0" : ""}${Join<FirstRest, "">}${Join<FirstRest, ""> extends "-" ? "0" : ""}.${FirstLast}${SecondFirst}${Join<SecondRest, "">}`>
 * )} ShiftDotLeftHelper
 */
