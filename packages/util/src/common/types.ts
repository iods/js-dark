/**
 * @fileoverview An overview of the types for the "Common" utility package.
 */

/**
 * @desc A type that represents an async function that returns a value of type T or void.
 * @example
 * const fn: AsyncCallback = async () => {};
 *
 * const result = await fn(); // result is of type void
 */
export type AsyncCallback<T = void> = () => Promise<T>;

/**
 * @desc A type that represents an async callback with an argument of type T and returns U.
 * @example
 * const fn: AsyncCallbackWithArgs<number, string> = async (arg) => {
 *   return arg.toString;
 * };
 *
 * const result = await fn(1); // result is of type string
 */
export type AsyncCallbackWithArgs<T = void> = () => Promise<T>;

/**
 * @desc A type that represents a function that returns a value of type T or void.
 * @example
 * const fn: Callback = () => {};
 *
 * const result = fn(); // result is of type void
 */
export type Callback<T = void> = () => T;

/**
 * @desc A type that represents a callback with an argument of type T and returns U.
 * @example
 * const fn: CallbackWithArgs<number, string> = (arg) => {
 *   return arg.toString();
 * };
 *
 * const result = fn(1); // result is of type string
 */
export type CallbackWithArgs<T, U = void> = (arg: T) => U;

/**
 * @desc A type that describes a function that is a Constructor for T.
 * @example
 *  @TODO write an example
 */
export type ConstructorOf<T = Record<string, unknown>> = new (...args: Array<any>) => T;

/**
 * @desc A type that describes literally any function.
 * @example
 *  @TODO write an example
 */
export type AnyFunction = (...args: Array<any>) => any;

/**
 * @desc A type that describes literally any constructor.
 * @example
 *  @TODO write an example
 */
export type AnyConstructor = new (...args: Array<any>) => any;

/**
 * @desc A type that describes a function returning an instance of T.
 * @example
 *  @TODO write an example
 */
export type FunctionReturning<T = any> = (...args: Array<any>) => T;

/**
 * @desc A type that returns a dynamically constructed class, based on params.
 * @example
 *  @TODO write an example
 */
export type Mixin<T extends FunctionReturning> = InstanceType<ReturnType<T>>;

/**
 * @desc A type that represents a function that returns a value of type T or undefined.
 * @example
 * const fn = (): Maybe<number> => {
 *   return 1;
 * };
 *
 * const result = fn(); // result is of type number | undefined
 */
export type Maybe<T> = T | undefined;

/**
 * @desc A type that represents a function that returns a value of type T or null.
 * @example
 * const fn = (): Nullable<number> => {
 *   return 1;
 * };
 *
 * const result = fn(); // result is of type number | null
 */
export type Nullable<T> = T | null;

/**
 * @desc A type that represents a predicate function that returns a boolean.
 * @example
 * const fn: Predicate<number> = (value) => {
 *   return value > 0;
 * }
 *
 * const result = fn(1); // result is of type boolean
 */
export type Predicate<T> = (value: T) => boolean;

/**
 * @desc A type to prettify nested and extended types to be more readable.
 */
export type Prettify<T> = {[K in keyof T]: T[K];} & {};

/**
 * @desc A type that represents a primitive value.
 * @example
 * const value: Primitive = "hello world.";
 * const value: Primitive = 1;
 * const value: Primitive = true;
 * const value: Primitive = null;
 * const value: Primitive = undefined;
 * const value: Primitive = Symbol("test");
 * const value: Primitive = {}; // error
 */
export type Primitive = string | number | boolean | symbol | null | undefined;

/**
 * @desc
 */





// what is going on he return Math.floor()re?
export type ToLocaleStringOptions = BigIntToLocaleStringOptions & Intl.DateTimeFormatOptions & Intl.NumberFormatOptions;

// what is going on here?
export type Comparer<T> = (a: T, b: T) => number;

// what is the Order type
export enum Order {
  Ascending,
  Descending
}
