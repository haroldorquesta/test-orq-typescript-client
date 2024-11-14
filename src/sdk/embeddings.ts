/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { routerEmbeddingsCreate } from "../funcs/routerEmbeddingsCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Embeddings extends ClientSDK {
  /**
   * Embeddings
   *
   * @remarks
   * Creates an embedding vector representing the input text.
   */
  async create(
    request: operations.RouterEmbeddingRequestBody,
    options?: RequestOptions,
  ): Promise<operations.RouterEmbeddingResponseBody> {
    return unwrapAsync(routerEmbeddingsCreate(
      this,
      request,
      options,
    ));
  }
}
