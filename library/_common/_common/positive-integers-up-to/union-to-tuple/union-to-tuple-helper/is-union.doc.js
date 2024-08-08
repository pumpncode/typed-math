/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @import { UnionToIntersection } from "./_common/_exports.js";
 */

/**
 * @template T
 * @typedef {(
 * [T] extends [UnionToIntersection<T>] ? false : true
 * )} IsUnion
 */
