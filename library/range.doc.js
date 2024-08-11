/*
	eslint-disable

	unicorn/prevent-abbreviations,
	max-classes-per-file,
	no-unused-vars
	--
	jsdoc
*/

/**
 * @import { IsEqual } from "./is-equal.doc.js";
 * @import { Placeholder } from "./range/_exports.js";
 */

const unsetSymbol = Symbol("unset");
const rawArgumentsSymbol = Symbol("rawArgumentsSymbol");

/** @typedef {typeof unsetSymbol} unset */

/** @typedef {typeof rawArgumentsSymbol} RawArguments */

/**
 * @template T
 * @typedef {[T] extends [never] ? true : false} IsNever
 */

/**
 * @template xs
 * @template {any[]} [output=[]]
 * @typedef {xs extends [
 * 	infer first,
 * 	...infer rest
 * ]
 * 	? IsEqual<first, Placeholder> extends true
 *  ? ExcludePlaceholders<rest, output>
 * 		: ExcludePlaceholders<rest, [...output, first]>
 * 	: output} ExcludePlaceholders
 */

/**
 * @template {any[]} pipedArguments
 * @template {any[]} partialArguments
 * @template {any[]} [output=[]]
 * @typedef {partialArguments extends [infer partialFirst, ...infer partialRest]
 * 	? IsNever<partialFirst> extends true
 * 		? MergeArgumentsRec<pipedArguments, partialRest, [...output, partialFirst]>
 * 		: [partialFirst] extends [Placeholder]
 * 			? pipedArguments extends [infer pipedFirst, ...infer pipedRest]
 * 				? MergeArgumentsRec<pipedRest, partialRest, [...output, pipedFirst]>
 * 				: [...output, ...ExcludePlaceholders<partialRest>]
 * 			: MergeArgumentsRec<pipedArguments, partialRest, [...output, partialFirst]>
 * 	: [...output, ...pipedArguments]} MergeArgumentsRec
 */

/**
 * @template x
 * @typedef {IsNever<x> extends true
 * 	? never
 * 	: [x] extends [unset]
 * 		? Placeholder
 * 		: x} EmptyIntoPlaceholder
 */

/**
 * @template xs
 * @template {any[]} [output=[]]
 * @typedef {xs extends [
 * 	infer first,
 * 	...infer rest
 * ]
 * 	? MapEmptyIntoPlaceholder<rest, [...output, EmptyIntoPlaceholder<first>]>
 * 	: output} MapEmptyIntoPlaceholder
 */

/**
 * @template {any[]} pipedArguments
 * @template {any[]} partialArguments
 * @typedef {MergeArgumentsRec<pipedArguments, MapEmptyIntoPlaceholder<partialArguments>>} MergeArguments
 */

/**
 * @template {FunctionHelper} functionHelper
 * @template {unknown[]} Arguments
 * @typedef {({
 * 	[rawArgumentsSymbol]: Arguments
 * } & functionHelper)["return"]} Apply
 */

/**
 * @template {FunctionHelper} functionHelper
 * @template [argument0=Placeholder]
 * @template [argument1=Placeholder]
 * @template [argument2=Placeholder]
 * @template [argument3=Placeholder]
 * @typedef {({
 * 	[rawArgumentsSymbol]: ExcludePlaceholders<[argument0, argument1, argument2, argument3]>
 * } & functionHelper)["return"]} Call
 */

/**
 * @template {string} T
 * @typedef {T extends `${infer N extends
 * | bigint
 * | number}`
 * 	? N
 * 	: never} ToNumber
 */

/** @typedef {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} Digits */

/** @typedef {Digits[number]} Digit */

/**
 * @typedef {object} DigitNumber
 * @property {Digit[]} num
 * @property {"" | "-"} sign
 */

/**
 * @template {DigitNumber} T
 * @typedef {T["sign"]} Sign
 */

/**
 * @template T
 * @template {string} [Accumulator=""]
 * @typedef {T extends [
 * 	infer N extends Digit,
 * 	...infer R
 * ]
 * 	? FromDigits<R, `${Accumulator}${N}`>
 * 	: Accumulator} FromDigits
 */

/**
 * @template {DigitNumber} T
 * @typedef {T["num"]} NumberPartOfDigitNumber
 */

/**
 * @template {DigitNumber} T
 * @typedef {`${Sign<T>}${FromDigits<
 * 	NumberPartOfDigitNumber<T>
 * >}`} FromDigitNumber
 */

/**
 * @template {Digit[]} T
 * @typedef {T extends [0]
 * 	? [0]
 * 	: T extends [0, ...infer R extends Digit[]]
 * 		? TrimZeros<R>
 * 		: T} TrimZeros
 */

/**
 * @template {"" | "-"} S
 * @template {Digit[]} N
 * @typedef {object} MakeDigitNumber
 * @property {N} num
 * @property {S} sign
 */

/**
 * @template {DigitNumber} T
 * @template {Digit[]} [Trim=TrimZeros<NumberPartOfDigitNumber<T>>]
 * @typedef {Trim extends [0]
 * 	? MakeDigitNumber<"", Trim>
 * 	: MakeDigitNumber<Sign<T>, Trim>} Normalize
 */

/**
 * @typedef {[
 * 	[
 * 		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
 * 		[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
 * 		[2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
 * 		[3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
 * 		[4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
 * 		[5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
 * 		[6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
 * 		[7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
 * 		[8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
 * 		[9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
 * 	],
 * 	[
 * 		[1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
 * 		[2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
 * 		[3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
 * 		[4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
 * 		[5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
 * 		[6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
 * 		[7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
 * 		[8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
 * 		[9, 0, 1, 2, 3, 4, 5, 6, 7, 8],
 * 		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * 	]
 * ]} AddDigitTable
 */

/**
 * @typedef {[
 * 	[
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 * 	],
 * 	[
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
 * 	]
 * ]} AddDigitCarryTable
 */

/**
 * @template {Digit} T
 * @template {Digit} U
 * @template {0 | 1} [Carry=0]
 * @typedef {AddDigitTable[Carry][T][U]} AddDigit
 */

/**
 * @template {Digit} T
 * @template {Digit} U
 * @template {0 | 1} [Carry=0]
 * @typedef {AddDigitCarryTable[Carry][T][U]} AddCarryDigit
 */

/**
 * @template {Digit[]} T
 * @template {Digit[]} U
 * @template {0 | 1} [Carry=0]
 * @template {Digit[]} [Accumulator=[]]
 * @typedef {T extends [...infer R extends Digit[], infer N extends Digit]
 * 	? U extends [...infer S extends Digit[], infer M extends Digit]
 * 		? AddDigits<
 * 			R,
 * 			S,
 * 			AddCarryDigit<N, M, Carry>,
 * 			[AddDigit<N, M, Carry>, ...Accumulator]
 * 		>
 * 		: AddDigits<
 * 			R,
 * 			[],
 * 			AddCarryDigit<N, 0, Carry>,
 * 			[AddDigit<N, 0, Carry>, ...Accumulator]
 * 		>
 * 	: U extends [...infer S extends Digit[], infer M extends Digit]
 * 		? AddDigits<
 * 			[],
 * 			S,
 * 			AddCarryDigit<0, M, Carry>,
 * 			[AddDigit<0, M, Carry>, ...Accumulator]
 * 		>
 * 		: Carry extends 1
 * 			? [1, ...Accumulator]
 * 			: Accumulator} AddDigits
 */

/**
 * @template {any[]} T
 * @template {any[]} U
 * @typedef {T["length"] extends U["length"] ? 1 : 0} CompareLength
 */

/**
 * @typedef {[
 * 	[0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
 * 	[1, 0, -1, -1, -1, -1, -1, -1, -1, -1],
 * 	[1, 1, 0, -1, -1, -1, -1, -1, -1, -1],
 * 	[1, 1, 1, 0, -1, -1, -1, -1, -1, -1],
 * 	[1, 1, 1, 1, 0, -1, -1, -1, -1, -1],
 * 	[1, 1, 1, 1, 1, 0, -1, -1, -1, -1],
 * 	[1, 1, 1, 1, 1, 1, 0, -1, -1, -1],
 * 	[1, 1, 1, 1, 1, 1, 1, 0, -1, -1],
 * 	[1, 1, 1, 1, 1, 1, 1, 1, 0, -1],
 * 	[1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
 * ]} DigitCompareTable
 */

/**
 * @template {Digit} D1
 * @template {Digit} D2
 * @typedef {DigitCompareTable[D1][D2]} DigitCompare
 */

/**
 * @template {Digit[]} T
 * @template {Digit[]} U
 * @typedef {[T, U] extends [
 * 	[infer N1 extends Digit, ...infer R1 extends Digit[]],
 * 	[infer N2 extends Digit, ...infer R2 extends Digit[]]
 * ]
 * 	? DigitCompare<N1, N2> extends 0
 * 		? CompareDigitsWithEqualLength<R1, R2>
 * 		: DigitCompare<N1, N2>
 * 	: 0} CompareDigitsWithEqualLength
 */

/**
 * @template {Digit[]} T
 * @template {Digit[]} U
 * @typedef {CompareLength<
 * 	T,
 * 	U
 * > extends 1
 * 	? CompareDigitsWithEqualLength<T, U>
 * 	: keyof U extends keyof T
 * 		? 1
 * 		: -1} CompareDigits
 */

/**
 * @typedef {[
 * 	[
 * 		[0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
 * 		[1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
 * 		[2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
 * 		[3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
 * 		[4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
 * 		[5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
 * 		[6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
 * 		[7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
 * 		[8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
 * 		[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
 * 	],
 * 	[
 * 		[9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
 * 		[0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
 * 		[1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
 * 		[2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
 * 		[3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
 * 		[4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
 * 		[5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
 * 		[6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
 * 		[7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
 * 		[8, 7, 6, 5, 4, 3, 2, 1, 0, 9]
 * 	]
 * ]} SubDigitTable
 */

/**
 * @typedef {[
 * 	[
 * 		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * 	],
 * 	[
 * 		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
 * 		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
 * 	]
 * ]} SubDigitCarryTable
 */

/**
 * @template {Digit} T
 * @template {Digit} U
 * @template {0 | 1} [Carry=0]
 * @typedef {SubDigitTable[Carry][T][U]} SubDigit
 */

/**
 * @template {Digit} T
 * @template {Digit} U
 * @template {0 | 1} [Carry=0]
 * @typedef {SubDigitCarryTable[Carry][T][U]} SubCarryDigit
 */

/**
 * @template {Digit[]} T
 * @template {Digit[]} U
 * @template {0 | 1} [Carry=0]
 * @template {Digit[]} [Accumulator=[]]
 * @typedef {T extends [...infer R extends Digit[], infer N extends Digit]
 * 	? U extends [...infer S extends Digit[], infer M extends Digit]
 * 		? SubDigits<
 * 			R,
 * 			S,
 * 			SubCarryDigit<N, M, Carry>,
 * 			[SubDigit<N, M, Carry>, ...Accumulator]
 * 		>
 * 		: SubDigits<
 * 			R,
 * 			[],
 * 			SubCarryDigit<N, 0, Carry>,
 * 			[SubDigit<N, 0, Carry>, ...Accumulator]
 * 		>
 * 	: U extends [...infer S extends Digit[], infer M extends Digit]
 * 		? SubDigits<
 * 			[],
 * 			S,
 * 			SubCarryDigit<0, M, Carry>,
 * 			[SubDigit<0, M, Carry>, ...Accumulator]
 * 		>
 * 		: Carry extends 1
 * 			? [...Accumulator, 9]
 * 			: Accumulator} SubDigits
 */

/**
 * @template {DigitNumber} T
 * @typedef {Sign<T> extends "-" ? "" : "-"} InvertSign
 */

/**
 * @template {DigitNumber} T
 * @template {DigitNumber} U
 * @typedef {Sign<T> extends Sign<U>
 * 	? MakeDigitNumber<Sign<T>, AddDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>>>
 * 	: CompareDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>> extends 1
 * 		? MakeDigitNumber<Sign<T>, SubDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>>>
 * 		: MakeDigitNumber<InvertSign<T>, SubDigits<NumberPartOfDigitNumber<U>, NumberPartOfDigitNumber<T>>>} AddDigitNumbers
 */

/**
 * @template {string} T
 * @template {Digit[]} [Accumulator=[]]
 * @typedef {T extends `${infer N extends Digit}${infer R}`
 * 	? ToDigits<R, [...Accumulator, N]>
 * 	: Accumulator} ToDigits
 */

/**
 * @template {string} T
 * @typedef {T extends `-${infer R}`
 * 	? {
 * 		num: ToDigits<R>,
 * 		sign: "-"
 * 	}
 * 	: {
 * 		num: ToDigits<T>,
 * 		sign: ""
 * 	}} ToDigitNumber
 */

/**
 * @template {bigint | number} T
 * @typedef {`${T}`} ToString
 */

/**
 * @template {bigint | number} T
 * @template {bigint | number} U
 * @typedef {ToNumber<
 * 	FromDigitNumber<
 * 		Normalize<
 * 			AddDigitNumbers<ToDigitNumber<ToString<T>>, ToDigitNumber<ToString<U>>>
 * 		>
 * 	>
 * >} AddImplementation
 */

/**
 * @template {Placeholder | bigint | number | unset} [n1=unset]
 * @template {Placeholder | bigint | number | unset} [n2=unset]
 * @typedef {PartialApply<AddFunction, [n1, n2]>} Add
 */

/**
 * @template {number} start
 * @template {number} length
 * @template {any[]} [output=[]]
 * @typedef {output["length"] extends length
 * 	? output
 * 	: RangeImpl<
 * 		start,
 * 		length,
 * 		[...output, Call<Add<start, output["length"]>>]
 * 	>} RangeImpl
 */

/**
 * @template {DigitNumber} T
 * @template {DigitNumber} U
 * @typedef {Sign<T> extends Sign<U>
 * 	? Sign<T> extends ""
 * 		? CompareDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>>
 * 		: CompareDigits<NumberPartOfDigitNumber<U>, NumberPartOfDigitNumber<T>>
 * 	: Sign<T> extends "-"
 * 		? -1
 * 		: 1} CompareDigitNumbers
 */

/**
 * @template {bigint | number} T
 * @template {bigint | number} U
 * @typedef {IsEqual<T, U> extends true
 * 	? 0
 * 	: CompareDigitNumbers<ToDigitNumber<ToString<T>>, ToDigitNumber<ToString<U>>>} Compare
 */

/**
 * @template {bigint | number} T
 * @template {bigint | number} U
 * @typedef {Compare<T, U> extends -1 | 0 ? true : false} LessThanOrEqualImplementation
 */

/**
 * @template {Placeholder | bigint | number | unset} [n1=unset]
 * @template {Placeholder | bigint | number | unset} [n2=unset]
 * @typedef {PartialApply<
 * 	LessThanOrEqualFunction,
 * 	n2 extends unset ? [unset, n1] : [n1, n2]
 * >} LessThanOrEqual
 */

/**
 * @template accumulator
 * @template {FunctionHelper[]} xs
 * @typedef {xs extends [
 * 	infer first extends FunctionHelper,
 * 	...infer rest extends FunctionHelper[]
 * ]
 * 	? Pipe<Call<first, accumulator>, rest>
 * 	: accumulator} Pipe
 */

/**
 * @template {DigitNumber} T
 * @template {DigitNumber} U
 * @typedef {Sign<T> extends Sign<U>
 * 	? CompareDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>> extends 1
 * 		? MakeDigitNumber<Sign<T>, SubDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>>>
 * 		: MakeDigitNumber<InvertSign<T>, SubDigits<NumberPartOfDigitNumber<U>, NumberPartOfDigitNumber<T>>>
 * 	: MakeDigitNumber<Sign<T>, AddDigits<NumberPartOfDigitNumber<T>, NumberPartOfDigitNumber<U>>>} SubDigitNumbers
 */

/**
 * @template {bigint | number} T
 * @template {bigint | number} U
 * @typedef {ToNumber<
 * 	FromDigitNumber<
 * 		Normalize<
 * 			SubDigitNumbers<ToDigitNumber<ToString<T>>, ToDigitNumber<ToString<U>>>
 * 		>
 * 	>
 * >} SubImplementation
 */

/**
 * @template {Placeholder | bigint | number | unset} [n1=unset]
 * @template {Placeholder | bigint | number | unset} [n2=unset]
 * @typedef {PartialApply<SubFunction, n2 extends unset ? [unset, n1] : [n1, n2]>} Sub
 */

/**
 * @template {bigint | number} T
 * @typedef {`${T}` extends `-${infer U extends
 * | bigint
 * | number}`
 * 	? U
 * 	: T} AbsImplementation
 */

/**
 * @template {Placeholder | bigint | number | unset} [n=unset]
 * @typedef {PartialApply<
 * 	AbsFunction,
 * 	[n]
 * >} Abs
 */

/**
 *
 */
const FunctionHelperClass = class {

	/** @type {this[RawArguments] extends [infer Argument, ...any] ? Argument : never} */
	arg0;

	/** @type {this[RawArguments] extends [any, infer Argument, ...any] ? Argument : never} */
	arg1;

	/** @type {this[RawArguments] extends [any, any, infer Argument, ...any] ? Argument : never} */
	arg2;

	/** @type {this[RawArguments] extends [any, any, any, infer Argument, ...any] ? Argument : never} */
	arg3;

	/** @type {this[RawArguments] extends infer Arguments extends unknown[] ? Arguments : never} */
	args;

	/** @type {unknown} */
	[rawArgumentsSymbol] = [];

	/** @type {unknown} */
	return;

};

/**
 * @typedef {FunctionHelperClass} FunctionHelper
 */

/**
 * @template {FunctionHelper} ThisTemplate
 * @template {FunctionHelper} functionHelper
 * @template {unknown[]} partialArguments
 * @typedef {MergeArguments<ThisTemplate["args"], partialArguments> extends infer Arguments extends unknown[] ? Apply<functionHelper, Arguments>: never}  PartialApplyType
 */

/**
 * @template {FunctionHelper} functionHelper
 * @template {unknown[]} partialArguments
 */
const PartialApplyClass = class extends FunctionHelperClass {

	/**
	 * @type {PartialApplyType<this, functionHelper, partialArguments>}
	 * @override
	 */
	return = /** @type {PartialApplyType<this, functionHelper, partialArguments>} */ (
		/** @type {unknown} */ (undefined)
	);

};

/**
 * @template {FunctionHelper} functionHelper
 * @template {unknown[]} partialArguments
 * @typedef {PartialApplyClass<functionHelper, partialArguments>} PartialApply
 */

/**
 * @template {FunctionHelper} ThisTemplate
 * @typedef {ThisTemplate["args"] extends [infer a extends bigint | number,infer b extends bigint | number,...any	] ? AddImplementation<a, b>: never} AddType
 */

/**
 *
 */
const AddClass = class extends FunctionHelperClass {

	/**
	 * @type {AddType<this>}
	 * @override
	 */
	return = /** @type {AddType<this>} */ (
		/** @type {unknown} */ (undefined)
	);

};

/**
 * @typedef {AddClass} AddFunction
 */

/**
 * @template {FunctionHelper} ThisTemplate
 * @typedef {ThisTemplate["args"] extends [infer a extends bigint | number,infer b extends bigint | number,...any	] ? LessThanOrEqualImplementation<a, b>: never} LessThanOrEqualType
 */

/**
 *
 */
const LessThanOrEqualClass = class extends FunctionHelperClass {

	/**
	 * @type {LessThanOrEqualType<this>}
	 * @override
	 */
	return = /** @type {LessThanOrEqualType<this>} */ (
		/** @type {unknown} */ (undefined)
	);

};

/**
 * @typedef {LessThanOrEqualClass} LessThanOrEqualFunction
 */

/**
 * @template {FunctionHelper} ThisTemplate
 * @typedef {ThisTemplate["args"] extends [infer a extends bigint | number,infer b extends bigint | number,...any	] ? SubImplementation<a, b>: never} SubType
 */

/**
 *
 */
const SubClass = class extends FunctionHelperClass {

	/**
	 * @type {SubType<this>}
	 * @override
	 */
	return = /** @type {SubType<this>} */ (
		/** @type {unknown} */ (undefined)
	);

};

/**
 * @typedef {SubClass} SubFunction
 */

/**
 * @template {FunctionHelper} ThisTemplate
 * @typedef {ThisTemplate["args"] extends [infer a extends bigint | number, ...any] ? AbsImplementation<a>: never} AbsType
 */

/**
 *
 */
const AbsClass = class extends FunctionHelperClass {

	/**
	 * @type {AbsType<this>}
	 * @override
	 */
	return = /** @type {AbsType<this>} */ (
		/** @type {unknown} */ (undefined)
	);

};

/**
 * @typedef {AbsClass} AbsFunction
 */

/**
 * @template {FunctionHelper} ThisTemplate
 * @typedef {ThisTemplate["args"] extends [infer start extends number,infer end extends number	] ? Call<LessThanOrEqual, start, end> extends true	? Pipe<start,[Sub<end, Placeholder>, Add<1>, Abs]> extends infer length extends number? RangeImpl<start, length>: never	: never: never} RangeType
 */

/**
 *
 */
const RangeClass = class extends FunctionHelperClass {

	/**
	 * @type {RangeType<this>}
	 * @override
	 */
	return = /** @type {RangeType<this>} */ (
		/** @type {unknown} */ (undefined)
	);

};

/**
 * @typedef {RangeClass} RangeFunction
 */

/**
 * @template {Placeholder | number | unset} [start=unset]
 * @template {Placeholder | number | unset} [end=unset]
 * @typedef {PartialApply<RangeFunction, [start, end]>} RangeHelper
 */

/**
 * @template {number} start
 * @template {number} end
 * @typedef {Call<RangeHelper<start,end>>} Range
 */

export {};
