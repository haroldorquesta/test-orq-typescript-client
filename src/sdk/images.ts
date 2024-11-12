/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { routerImagesGenerate } from "../funcs/routerImagesGenerate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Images extends ClientSDK {
  async generate(
    request?: operations.PostV2RouterImagesGenerationsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostV2RouterImagesGenerationsResponseBody> {
    return unwrapAsync(routerImagesGenerate(
      this,
      request,
      options,
    ));
  }
}
