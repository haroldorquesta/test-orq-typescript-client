/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsGetConfig } from "../funcs/deploymentsGetConfig.js";
import {
  deploymentsInvoke,
  InvokeAcceptEnum,
} from "../funcs/deploymentsInvoke.js";
import { deploymentsList } from "../funcs/deploymentsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Metrics } from "./metrics.js";

export { InvokeAcceptEnum } from "../funcs/deploymentsInvoke.js";

export class Deployments extends ClientSDK {
  private _metrics?: Metrics;
  get metrics(): Metrics {
    return (this._metrics ??= new Metrics(this._options));
  }

  /**
   * Get config
   *
   * @remarks
   * Retrieve the deployment configuration
   */
  async getConfig(
    request: operations.DeploymentGetConfigRequestBody,
    options?: RequestOptions,
  ): Promise<operations.DeploymentGetConfigResponseBody | undefined> {
    return unwrapAsync(deploymentsGetConfig(
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
  async invoke(
    request: components.Deployments,
    options?: RequestOptions & { acceptHeaderOverride?: InvokeAcceptEnum },
  ): Promise<operations.DeploymentInvokeResponse | undefined> {
    return unwrapAsync(deploymentsInvoke(
      this,
      request,
      options,
    ));
  }

  /**
   * List all deployments
   *
   * @remarks
   * Returns a list of your deployments. The deployments are returned sorted by creation date, with the most recent deployments appearing first.
   */
  async list(
    limit?: number | undefined,
    after?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.DeploymentsResponseBody> {
    return unwrapAsync(deploymentsList(
      this,
      limit,
      after,
      options,
    ));
  }
}
