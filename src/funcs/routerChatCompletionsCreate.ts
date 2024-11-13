/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { OrqCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
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

export enum CreateAcceptEnum {
  applicationJson = "application/json",
  textEventStream = "text/event-stream",
}

/**
 * Chat
 *
 * @remarks
 * For sending requests to chat completion models
 */
export async function routerChatCompletionsCreate(
  client: OrqCore,
  request: operations.PostV2RouterChatCompletionsRequestBody,
  options?: RequestOptions & { acceptHeaderOverride?: CreateAcceptEnum },
): Promise<
  Result<
    operations.PostV2RouterChatCompletionsResponse,
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
      operations.PostV2RouterChatCompletionsRequestBody$outboundSchema.parse(
        value,
      ),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/v2/router/chat/completions")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, text/event-stream;q=0",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "post_/v2/router/chat/completions",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

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
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.PostV2RouterChatCompletionsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.PostV2RouterChatCompletionsResponse$inboundSchema),
    M.sse(200, operations.PostV2RouterChatCompletionsResponse$inboundSchema, {
      sseSentinel: "[DONE]",
    }),
    M.fail(["4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
