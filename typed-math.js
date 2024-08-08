/**
 * @import { AbsMethod, AcosMethod, AcoshMethod, AsinMethod, AsinhMethod, Atan2Method, AtanMethod, AtanhMethod, CbrtMethod, CeilMethod, Clz32Method, CosMethod, CoshMethod, E, ExpMethod, Expm1Method, F16roundMethod, FloorMethod, FroundMethod, HypotMethod, ImulMethod, Ln2, Ln10, Log2E, Log10E, LogMethod, Log1pMethod, Log2Method, Log10Method, MaxMethod, MinMethod, Pi, PowMethod, RandomMethod, RoundMethod, SignMethod, SinMethod, SinhMethod, SqrtMethod, SqrtOfOneHalf, SqrtOfTwo, TanMethod, TanhMethod, TruncMethod } from "./library/_exports.js";
 */

/**
 * @typedef {object} TypedMathType
 * @property {E} E - The mathematical constant e. This is Euler's number, the base of natural logarithms.
 * @property {Ln2} LN2 - The natural logarithm of 2.
 * @property {Ln10} LN10 - The natural logarithm of 10.
 * @property {Log2E} LOG2E - The base-2 logarithm of e.
 * @property {Log10E} LOG10E - The base-10 logarithm of e.
 * @property {Pi} PI	- Pi. This is the ratio of the circumference of a circle to its diameter.
 * @property {SqrtOfOneHalf} SQRT1_2 - The square root of 0.5, or, equivalently, one divided by the square root of 2.
 * @property {SqrtOfTwo} SQRT2 - The square root of 2.
 * @property {AbsMethod} abs - Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * @property {AcosMethod} acos - Returns the arc cosine (or inverse cosine) of a number.
 * @property {AcoshMethod} acosh - Returns the inverse hyperbolic cosine of a number.
 * @property {AsinMethod} asin - Returns the arcsine of a number.
 * @property {AsinhMethod} asinh - Returns the inverse hyperbolic sine of a number.
 * @property {AtanMethod} atan - Returns the arctangent of a number.
 * @property {Atan2Method} atan2 - Returns the angle (in radians) from the X axis to a point.
 * @property {AtanhMethod} atanh - Returns the inverse hyperbolic tangent of a number.
 * @property {CbrtMethod} cbrt - Returns the cube root of a number.
 * @property {CeilMethod} ceil - Returns the smallest integer greater than or equal to its numeric argument.
 * @property {Clz32Method} clz32 - Returns the number of leading zero bits in the 32-bit binary representation of a number.
 * @property {CosMethod} cos - Returns the cosine of a number.
 * @property {CoshMethod} cosh - Returns the hyperbolic cosine of a number.
 * @property {ExpMethod} exp - Returns e (the base of natural logarithms) raised to a power.
 * @property {Expm1Method} expm1 - Returns subtracting 1 from exp(x).
 * @property {F16roundMethod} f16round - Returns the nearest 16-bit floating-point representation of a number.
 * @property {FloorMethod} floor - Returns the greatest integer less than or equal to its numeric argument.
 * @property {FroundMethod} fround - Returns the nearest single precision float representation of a number.
 * @property {HypotMethod} hypot - Returns the square root of the sum of squares of its arguments.
 * @property {ImulMethod} imul - Returns the result of a 32-bit integer multiplication.
 * @property {LogMethod} log - Returns the natural logarithm (base e) of a number.
 * @property {Log1pMethod} log1p - Returns the natural logarithm of 1 + x.
 * @property {Log2Method} log2 - Returns the base-2 logarithm of a number.
 * @property {Log10Method} log10 - Returns the base-10 logarithm of a number.
 * @property {MaxMethod} max - Returns the larger of a set of supplied numeric expressions.
 * @property  {MinMethod} min - Returns the smaller of a set of supplied numeric expressions.
 * @property {PowMethod} pow - Returns the value of a base expression taken to a specified power.
 * @property {RandomMethod} random - Returns a pseudorandom number between 0 and 1.
 * @property {RoundMethod} round - Returns a supplied numeric expression rounded to the nearest integer.
 * @property {SignMethod} sign - Returns the sign of the x, indicating whether x is positive, negative or zero.
 * @property {SinMethod} sin - Returns the sine of a number.
 * @property {SinhMethod} sinh - Returns the hyperbolic sine of a number.
 * @property {SqrtMethod} sqrt - Returns the square root of a number.
 * @property {TanMethod} tan - Returns the tangent of a number.
 * @property {TanhMethod} tanh - Returns the hyperbolic tangent of a number.
 * @property {TruncMethod} trunc - Returns the integer part of a number by removing any fractional digits.
 */

const TypedMath = /** @type {TypedMathType} */ (
	/** @type {unknown} */ (Math)
);

const {
	min,
	max,
	E,
	LN2,
	LN10,
	LOG2E,
	LOG10E,
	PI,
	SQRT1_2,
	SQRT2,
	abs,
	acos,
	acosh,
	asin,
	asinh,
	atan,
	atan2,
	atanh,
	cbrt,
	ceil,
	clz32,
	cos,
	cosh,
	exp,
	expm1,
	f16round,
	floor,
	fround,
	hypot,
	imul,
	log,
	log1p,
	log2,
	log10,
	pow,
	random,
	round,
	sign,
	sin,
	sinh,
	sqrt,
	tan,
	tanh,
	trunc
} = TypedMath;

export {
	E,
	LN2,
	LN10,
	LOG2E,
	LOG10E,
	PI,
	SQRT1_2,
	SQRT2,
	abs,
	acos,
	acosh,
	asin,
	asinh,
	atan,
	atan2,
	atanh,
	cbrt,
	ceil,
	clz32,
	cos,
	cosh,
	exp,
	expm1,
	f16round,
	floor,
	fround,
	hypot,
	imul,
	log,
	log1p,
	log2,
	log10,
	max,
	min,
	pow,
	random,
	round,
	sign,
	sin,
	sinh,
	sqrt,
	tan,
	tanh,
	trunc
};

export default TypedMath;
