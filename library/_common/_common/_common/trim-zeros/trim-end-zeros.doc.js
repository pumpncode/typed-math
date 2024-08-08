/*
	eslint-disable

	import-x/unambiguous,
	unicorn/no-empty-file,
	unicorn/prevent-abbreviations
	--
	jsdoc
*/

/**
 * @template {string} StringTemplate
 * @typedef {(
 * StringTemplate extends `${infer IntegerPart}.${infer DecimalPart}`
 * 	? DecimalPart extends "0"
 * 		? IntegerPart
 * 		: DecimalPart extends `${infer DecimalPartWithoutLastZero}0`
 * 			? TrimEndZeros<`${IntegerPart}.${DecimalPartWithoutLastZero}`>
 * 			: `${IntegerPart}.${DecimalPart}`
 * 	: StringTemplate
 * )} TrimEndZeros
 */
