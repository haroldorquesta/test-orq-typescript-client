/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { OrqCore } from "../core.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Bulk upload file
 *
 * @remarks
 * Files are used to upload documents that can be used with features like [Deployments](https://docs.orq.ai/reference/post_v2-deployments-get-config).
 */
export async function filesPostV2FilesBulk(
  client: OrqCore,
  request: operations.PostV2FilesBulkRequestBody,
  options?: RequestOptions,
): Promise<
  Result<
    Array<operations.ResponseBody>,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.PostV2FilesBulkRequestBody$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  for (const file of payload.files) {
    if (file !== undefined) {
      if (typeof file === 'object' && 'content' in file) {
        const content = (file as { content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array }).content
        body.append("files", String(content));
      } else {
        body.append("files", String(file));
      }
    }
  }

  body.append("purpose", payload.purpose);

  const path = pathToFunc("/v2/files/bulk")();

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.bearer);
  const securityInput = secConfig == null ? {} : { bearer: secConfig };
  const context = {
    operationID: "post_/v2/files/bulk",
    oAuth2Scopes: [],
    securitySource: client._options.bearer,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    Array<operations.ResponseBody>,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, z.array(operations.ResponseBody$inboundSchema)),
    M.fail([400, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
