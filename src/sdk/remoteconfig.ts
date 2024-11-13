/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remoteconfigGetConfig } from "../funcs/remoteconfigGetConfig.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Remoteconfig extends ClientSDK {
  /**
   * Get config
   *
   * @remarks
   * Retrieve the deployment configuration
   */
  async getConfig(
    request?: operations.PostV2RemoteconfigsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostV2RemoteconfigsResponseBody> {
    return unwrapAsync(remoteconfigGetConfig(
      this,
      request,
      options,
    ));
  }
}
