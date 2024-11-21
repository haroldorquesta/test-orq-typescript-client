/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The feedback value. For single selection of multiple choice, the value should be an array of strings. For `correction`, the value should be a string.
 */
export type Value = string | Array<string>;

/**
 * Feedback submission payload
 */
export type CreateFeedbackRequestBody = {
  /**
   * A string describing the specific property or aspect rated.
   */
  property: string;
  /**
   * The feedback value. For single selection of multiple choice, the value should be an array of strings. For `correction`, the value should be a string.
   */
  value: string | Array<string>;
  /**
   * The id returned by the [`get_config`]() or [`invoke`](https://docs.orq.ai/reference/post_deployments-invoke-1) endpoints
   */
  traceId: string;
};

/**
 * The feedback value. For single selection of multiple choice, the value should be an array of strings. For `correction`, the value should be a string.
 */
export type CreateFeedbackValue = string | Array<string>;

/**
 * Successful operation
 */
export type CreateFeedbackResponseBody = {
  /**
   * A string describing the specific property or aspect rated.
   */
  property: string;
  /**
   * The feedback value. For single selection of multiple choice, the value should be an array of strings. For `correction`, the value should be a string.
   */
  value: string | Array<string>;
  /**
   * The id returned by the [`get_config`]() or [`invoke`](https://docs.orq.ai/reference/post_deployments-invoke-1) endpoints
   */
  traceId: string;
  id: string;
};

/** @internal */
export const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.string())]);

/** @internal */
export type Value$Outbound = string | Array<string>;

/** @internal */
export const Value$outboundSchema: z.ZodType<
  Value$Outbound,
  z.ZodTypeDef,
  Value
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value$ {
  /** @deprecated use `Value$inboundSchema` instead. */
  export const inboundSchema = Value$inboundSchema;
  /** @deprecated use `Value$outboundSchema` instead. */
  export const outboundSchema = Value$outboundSchema;
  /** @deprecated use `Value$Outbound` instead. */
  export type Outbound = Value$Outbound;
}

export function valueToJSON(value: Value): string {
  return JSON.stringify(Value$outboundSchema.parse(value));
}

export function valueFromJSON(
  jsonString: string,
): SafeParseResult<Value, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Value$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Value' from JSON`,
  );
}

/** @internal */
export const CreateFeedbackRequestBody$inboundSchema: z.ZodType<
  CreateFeedbackRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  property: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
  trace_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "trace_id": "traceId",
  });
});

/** @internal */
export type CreateFeedbackRequestBody$Outbound = {
  property: string;
  value: string | Array<string>;
  trace_id: string;
};

/** @internal */
export const CreateFeedbackRequestBody$outboundSchema: z.ZodType<
  CreateFeedbackRequestBody$Outbound,
  z.ZodTypeDef,
  CreateFeedbackRequestBody
> = z.object({
  property: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
  traceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    traceId: "trace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFeedbackRequestBody$ {
  /** @deprecated use `CreateFeedbackRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateFeedbackRequestBody$inboundSchema;
  /** @deprecated use `CreateFeedbackRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateFeedbackRequestBody$outboundSchema;
  /** @deprecated use `CreateFeedbackRequestBody$Outbound` instead. */
  export type Outbound = CreateFeedbackRequestBody$Outbound;
}

export function createFeedbackRequestBodyToJSON(
  createFeedbackRequestBody: CreateFeedbackRequestBody,
): string {
  return JSON.stringify(
    CreateFeedbackRequestBody$outboundSchema.parse(createFeedbackRequestBody),
  );
}

export function createFeedbackRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateFeedbackRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFeedbackRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFeedbackRequestBody' from JSON`,
  );
}

/** @internal */
export const CreateFeedbackValue$inboundSchema: z.ZodType<
  CreateFeedbackValue,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CreateFeedbackValue$Outbound = string | Array<string>;

/** @internal */
export const CreateFeedbackValue$outboundSchema: z.ZodType<
  CreateFeedbackValue$Outbound,
  z.ZodTypeDef,
  CreateFeedbackValue
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFeedbackValue$ {
  /** @deprecated use `CreateFeedbackValue$inboundSchema` instead. */
  export const inboundSchema = CreateFeedbackValue$inboundSchema;
  /** @deprecated use `CreateFeedbackValue$outboundSchema` instead. */
  export const outboundSchema = CreateFeedbackValue$outboundSchema;
  /** @deprecated use `CreateFeedbackValue$Outbound` instead. */
  export type Outbound = CreateFeedbackValue$Outbound;
}

export function createFeedbackValueToJSON(
  createFeedbackValue: CreateFeedbackValue,
): string {
  return JSON.stringify(
    CreateFeedbackValue$outboundSchema.parse(createFeedbackValue),
  );
}

export function createFeedbackValueFromJSON(
  jsonString: string,
): SafeParseResult<CreateFeedbackValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFeedbackValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFeedbackValue' from JSON`,
  );
}

/** @internal */
export const CreateFeedbackResponseBody$inboundSchema: z.ZodType<
  CreateFeedbackResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  property: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
  trace_id: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "trace_id": "traceId",
  });
});

/** @internal */
export type CreateFeedbackResponseBody$Outbound = {
  property: string;
  value: string | Array<string>;
  trace_id: string;
  id: string;
};

/** @internal */
export const CreateFeedbackResponseBody$outboundSchema: z.ZodType<
  CreateFeedbackResponseBody$Outbound,
  z.ZodTypeDef,
  CreateFeedbackResponseBody
> = z.object({
  property: z.string(),
  value: z.union([z.string(), z.array(z.string())]),
  traceId: z.string(),
  id: z.string(),
}).transform((v) => {
  return remap$(v, {
    traceId: "trace_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateFeedbackResponseBody$ {
  /** @deprecated use `CreateFeedbackResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateFeedbackResponseBody$inboundSchema;
  /** @deprecated use `CreateFeedbackResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateFeedbackResponseBody$outboundSchema;
  /** @deprecated use `CreateFeedbackResponseBody$Outbound` instead. */
  export type Outbound = CreateFeedbackResponseBody$Outbound;
}

export function createFeedbackResponseBodyToJSON(
  createFeedbackResponseBody: CreateFeedbackResponseBody,
): string {
  return JSON.stringify(
    CreateFeedbackResponseBody$outboundSchema.parse(createFeedbackResponseBody),
  );
}

export function createFeedbackResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreateFeedbackResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFeedbackResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFeedbackResponseBody' from JSON`,
  );
}