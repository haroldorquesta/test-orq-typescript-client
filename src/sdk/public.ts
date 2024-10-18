/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { publicDeleteV2ResourcesDatasetsDatasetId } from "../funcs/publicDeleteV2ResourcesDatasetsDatasetId.js";
import { publicDeleteV2ResourcesDatasetsDatasetIdRowsBulk } from "../funcs/publicDeleteV2ResourcesDatasetsDatasetIdRowsBulk.js";
import { publicDeleteV2ResourcesDatasetsDatasetIdRowsRowId } from "../funcs/publicDeleteV2ResourcesDatasetsDatasetIdRowsRowId.js";
import { publicGetV2ResourcesDatasets } from "../funcs/publicGetV2ResourcesDatasets.js";
import { publicGetV2ResourcesDatasetsDatasetId } from "../funcs/publicGetV2ResourcesDatasetsDatasetId.js";
import { publicGetV2ResourcesDatasetsDatasetIdRows } from "../funcs/publicGetV2ResourcesDatasetsDatasetIdRows.js";
import { publicGetV2ResourcesDatasetsDatasetIdRowsRowId } from "../funcs/publicGetV2ResourcesDatasetsDatasetIdRowsRowId.js";
import { publicPatchV2ResourcesDatasetsDatasetId } from "../funcs/publicPatchV2ResourcesDatasetsDatasetId.js";
import { publicPatchV2ResourcesDatasetsDatasetIdRowsRowId } from "../funcs/publicPatchV2ResourcesDatasetsDatasetIdRowsRowId.js";
import { publicPostV2DeploymentsGetConfig } from "../funcs/publicPostV2DeploymentsGetConfig.js";
import { publicPostV2DeploymentsIdMetrics } from "../funcs/publicPostV2DeploymentsIdMetrics.js";
import {
  PostV2DeploymentsInvokeAcceptEnum,
  publicPostV2DeploymentsInvoke,
} from "../funcs/publicPostV2DeploymentsInvoke.js";
import { publicPostV2Files } from "../funcs/publicPostV2Files.js";
import { publicPostV2FilesBulk } from "../funcs/publicPostV2FilesBulk.js";
import { publicPostV2ResourcesDatasets } from "../funcs/publicPostV2ResourcesDatasets.js";
import { publicPostV2ResourcesDatasetsDatasetIdRows } from "../funcs/publicPostV2ResourcesDatasetsDatasetIdRows.js";
import { publicPostV2ResourcesDatasetsDatasetIdRowsBulk } from "../funcs/publicPostV2ResourcesDatasetsDatasetIdRowsBulk.js";
import {
  PostV2RouterChatCompletionsAcceptEnum,
  publicPostV2RouterChatCompletions,
} from "../funcs/publicPostV2RouterChatCompletions.js";
import { publicPostV2RouterCompletions } from "../funcs/publicPostV2RouterCompletions.js";
import { publicPostV2RouterEmbeddings } from "../funcs/publicPostV2RouterEmbeddings.js";
import { publicPostV2RouterImagesGenerations } from "../funcs/publicPostV2RouterImagesGenerations.js";
import { publicPostV2RouterRerank } from "../funcs/publicPostV2RouterRerank.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { PostV2DeploymentsInvokeAcceptEnum } from "../funcs/publicPostV2DeploymentsInvoke.js";

export { PostV2RouterChatCompletionsAcceptEnum } from "../funcs/publicPostV2RouterChatCompletions.js";

export class Public extends ClientSDK {
  /**
   * Get config
   *
   * @remarks
   * Retrieve the deployment configuration
   */
  async postV2DeploymentsGetConfig(
    request: operations.PostV2DeploymentsGetConfigRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV2DeploymentsGetConfigResponseBody | undefined> {
    return unwrapAsync(publicPostV2DeploymentsGetConfig(
      this,
      request,
      options,
    ));
  }

  /**
   * Invoke
   *
   * @remarks
   * Invoke a deployment with a given payload
   */
  async postV2DeploymentsInvoke(
    request: components.Deployments,
    options?: RequestOptions & {
      acceptHeaderOverride?: PostV2DeploymentsInvokeAcceptEnum;
    },
  ): Promise<operations.PostV2DeploymentsInvokeResponse | undefined> {
    return unwrapAsync(publicPostV2DeploymentsInvoke(
      this,
      request,
      options,
    ));
  }

  /**
   * Add metrics
   *
   * @remarks
   * Add metrics to a deployment
   */
  async postV2DeploymentsIdMetrics(
    request: operations.PostV2DeploymentsIdMetricsRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV2DeploymentsIdMetricsResponseBody> {
    return unwrapAsync(publicPostV2DeploymentsIdMetrics(
      this,
      request,
      options,
    ));
  }

  /**
   * Upload file
   *
   * @remarks
   * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
   */
  async postV2Files(
    request: operations.PostV2FilesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV2FilesResponseBody> {
    return unwrapAsync(publicPostV2Files(
      this,
      request,
      options,
    ));
  }

  /**
   * Bulk upload file
   *
   * @remarks
   * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
   */
  async postV2FilesBulk(
    request: operations.PostV2FilesBulkRequestBody,
    options?: RequestOptions,
  ): Promise<Array<operations.ResponseBody>> {
    return unwrapAsync(publicPostV2FilesBulk(
      this,
      request,
      options,
    ));
  }

  /**
   * Embeddings
   *
   * @remarks
   * Creates an embedding vector representing the input text.
   */
  async postV2RouterEmbeddings(
    request: operations.PostV2RouterEmbeddingsRequestBody,
    options?: RequestOptions,
  ): Promise<operations.PostV2RouterEmbeddingsResponseBody> {
    return unwrapAsync(publicPostV2RouterEmbeddings(
      this,
      request,
      options,
    ));
  }

  /**
   * Chat
   *
   * @remarks
   * For sending requests to chat completion models
   */
  async postV2RouterChatCompletions(
    request: operations.PostV2RouterChatCompletionsRequestBody,
    options?: RequestOptions & {
      acceptHeaderOverride?: PostV2RouterChatCompletionsAcceptEnum;
    },
  ): Promise<operations.PostV2RouterChatCompletionsResponse> {
    return unwrapAsync(publicPostV2RouterChatCompletions(
      this,
      request,
      options,
    ));
  }

  /**
   * legacy completions route
   *
   * @remarks
   * For sending requests to legacy completion models
   */
  async postV2RouterCompletions(
    request?: operations.PostV2RouterCompletionsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostV2RouterCompletionsResponseBody> {
    return unwrapAsync(publicPostV2RouterCompletions(
      this,
      request,
      options,
    ));
  }

  /**
   * rerank route
   *
   * @remarks
   * For sending requests to rerank models
   */
  async postV2RouterRerank(
    request?: operations.PostV2RouterRerankRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostV2RouterRerankResponseBody> {
    return unwrapAsync(publicPostV2RouterRerank(
      this,
      request,
      options,
    ));
  }

  async postV2RouterImagesGenerations(
    request?: operations.PostV2RouterImagesGenerationsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostV2RouterImagesGenerationsResponseBody> {
    return unwrapAsync(publicPostV2RouterImagesGenerations(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a dataset
   *
   * @remarks
   * Create a dataset
   */
  async postV2ResourcesDatasets(
    request?: operations.PostV2ResourcesDatasetsRequestBody | undefined,
    options?: RequestOptions,
  ): Promise<operations.PostV2ResourcesDatasetsResponseBody> {
    return unwrapAsync(publicPostV2ResourcesDatasets(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all datasets
   */
  async getV2ResourcesDatasets(
    request: operations.GetV2ResourcesDatasetsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2ResourcesDatasetsResponseBody> {
    return unwrapAsync(publicGetV2ResourcesDatasets(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a dataset
   */
  async deleteV2ResourcesDatasetsDatasetId(
    request: operations.DeleteV2ResourcesDatasetsDatasetIdRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(publicDeleteV2ResourcesDatasetsDatasetId(
      this,
      request,
      options,
    ));
  }

  /**
   * Get one  dataset
   */
  async getV2ResourcesDatasetsDatasetId(
    request: operations.GetV2ResourcesDatasetsDatasetIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2ResourcesDatasetsDatasetIdResponseBody> {
    return unwrapAsync(publicGetV2ResourcesDatasetsDatasetId(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a dataset
   *
   * @remarks
   * Update a dataset
   */
  async patchV2ResourcesDatasetsDatasetId(
    request: operations.PatchV2ResourcesDatasetsDatasetIdRequest,
    options?: RequestOptions,
  ): Promise<operations.PatchV2ResourcesDatasetsDatasetIdResponseBody> {
    return unwrapAsync(publicPatchV2ResourcesDatasetsDatasetId(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a list of dataset rows
   */
  async postV2ResourcesDatasetsDatasetIdRowsBulk(
    request: operations.PostV2ResourcesDatasetsDatasetIdRowsBulkRequest,
    options?: RequestOptions,
  ): Promise<
    Array<operations.PostV2ResourcesDatasetsDatasetIdRowsBulkResponseBody>
  > {
    return unwrapAsync(publicPostV2ResourcesDatasetsDatasetIdRowsBulk(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a list of dataset rows
   */
  async deleteV2ResourcesDatasetsDatasetIdRowsBulk(
    request: operations.DeleteV2ResourcesDatasetsDatasetIdRowsBulkRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(publicDeleteV2ResourcesDatasetsDatasetIdRowsBulk(
      this,
      request,
      options,
    ));
  }

  /**
   * Create a dataset row
   */
  async postV2ResourcesDatasetsDatasetIdRows(
    request: operations.PostV2ResourcesDatasetsDatasetIdRowsRequest,
    options?: RequestOptions,
  ): Promise<operations.PostV2ResourcesDatasetsDatasetIdRowsResponseBody> {
    return unwrapAsync(publicPostV2ResourcesDatasetsDatasetIdRows(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve all dataset rows
   */
  async getV2ResourcesDatasetsDatasetIdRows(
    request: operations.GetV2ResourcesDatasetsDatasetIdRowsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2ResourcesDatasetsDatasetIdRowsResponseBody> {
    return unwrapAsync(publicGetV2ResourcesDatasetsDatasetIdRows(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a dataset row
   */
  async deleteV2ResourcesDatasetsDatasetIdRowsRowId(
    request: operations.DeleteV2ResourcesDatasetsDatasetIdRowsRowIdRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(publicDeleteV2ResourcesDatasetsDatasetIdRowsRowId(
      this,
      request,
      options,
    ));
  }

  /**
   * Get one dataset row
   */
  async getV2ResourcesDatasetsDatasetIdRowsRowId(
    request: operations.GetV2ResourcesDatasetsDatasetIdRowsRowIdRequest,
    options?: RequestOptions,
  ): Promise<operations.GetV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody> {
    return unwrapAsync(publicGetV2ResourcesDatasetsDatasetIdRowsRowId(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a dataset row
   */
  async patchV2ResourcesDatasetsDatasetIdRowsRowId(
    request: operations.PatchV2ResourcesDatasetsDatasetIdRowsRowIdRequest,
    options?: RequestOptions,
  ): Promise<
    operations.PatchV2ResourcesDatasetsDatasetIdRowsRowIdResponseBody
  > {
    return unwrapAsync(publicPatchV2ResourcesDatasetsDatasetIdRowsRowId(
      this,
      request,
      options,
    ));
  }
}
