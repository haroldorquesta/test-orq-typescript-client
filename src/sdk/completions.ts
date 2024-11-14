/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { routerCompletionsCreate } from "../funcs/routerCompletionsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Completions extends ClientSDK {
  /**
   * legacy completions route
   *
   * @remarks
   * For sending requests to legacy completion models
   */
  async create(
    request?: operations.CreateCompletionsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.CreateCompletionsResponseBody> {
    return unwrapAsync(routerCompletionsCreate(
      this,
      request,
      options,
    ));
  }
}
