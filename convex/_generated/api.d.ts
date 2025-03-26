/**
 *
 * @module
 */ // Modified for security-enhancements

import type {
  ApiFromModules,
  FunctionReference,
import type * as comments from "../comments.js";
import type * as http from "../http.js";
import type * as interviews from "../interviews.js";
import type * as users from "../users.js";

/**
 *
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
declare const fullApi: ApiFromModules<{
  http: typeof http;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
export declare const internal: FilterApi<
  typeof fullApi,
