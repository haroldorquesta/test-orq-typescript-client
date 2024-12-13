/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { routerRerank } from "../funcs/routerRerank.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Chat } from "./chat.js";
import { Completions } from "./completions.js";
import { Embeddings } from "./embeddings.js";
import { Images } from "./images.js";

export class Router extends ClientSDK {
  private _embeddings?: Embeddings;
  get embeddings(): Embeddings {
    return (this._embeddings ??= new Embeddings(this._options));
  }

  private _chat?: Chat;
  get chat(): Chat {
    return (this._chat ??= new Chat(this._options));
  }

  private _completions?: Completions;
  get completions(): Completions {
    return (this._completions ??= new Completions(this._options));
  }

  private _images?: Images;
  get images(): Images {
    return (this._images ??= new Images(this._options));
  }

  /**
   * Rerank Documents
   *
   * @remarks
   * For sending requests to rerank models
   */
  async rerank(
    request?: operations.RouterRerankRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.RouterRerankResponseBody> {
    return unwrapAsync(routerRerank(
      this,
      request,
      options,
    ));
  }
}
