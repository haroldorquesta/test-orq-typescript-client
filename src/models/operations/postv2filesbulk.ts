/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The intended purpose of the uploaded file.
 */
export const PostV2FilesBulkPurpose = {
  Retrieval: "retrieval",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type PostV2FilesBulkPurpose = ClosedEnum<typeof PostV2FilesBulkPurpose>;

export type PostV2FilesBulkRequestBody = {
  /**
   * The file to be uploaded.
   */
  files: Array<any>;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose: PostV2FilesBulkPurpose;
};

/**
 * The intended purpose of the uploaded file.
 */
export const PostV2FilesBulkFilesPurpose = {
  Retrieval: "retrieval",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type PostV2FilesBulkFilesPurpose = ClosedEnum<
  typeof PostV2FilesBulkFilesPurpose
>;

export type ResponseBody = {
  id: string;
  /**
   * path to the file in the storage
   */
  objectName: string;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose: PostV2FilesBulkFilesPurpose;
  bytes: number;
  fileName: string;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
};

/** @internal */
export const PostV2FilesBulkPurpose$inboundSchema: z.ZodNativeEnum<
  typeof PostV2FilesBulkPurpose
> = z.nativeEnum(PostV2FilesBulkPurpose);

/** @internal */
export const PostV2FilesBulkPurpose$outboundSchema: z.ZodNativeEnum<
  typeof PostV2FilesBulkPurpose
> = PostV2FilesBulkPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2FilesBulkPurpose$ {
  /** @deprecated use `PostV2FilesBulkPurpose$inboundSchema` instead. */
  export const inboundSchema = PostV2FilesBulkPurpose$inboundSchema;
  /** @deprecated use `PostV2FilesBulkPurpose$outboundSchema` instead. */
  export const outboundSchema = PostV2FilesBulkPurpose$outboundSchema;
}

/** @internal */
export const PostV2FilesBulkRequestBody$inboundSchema: z.ZodType<
  PostV2FilesBulkRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  files: z.array(z.any()),
  purpose: PostV2FilesBulkPurpose$inboundSchema,
});

/** @internal */
export type PostV2FilesBulkRequestBody$Outbound = {
  files: Array<any>;
  purpose: string;
};

/** @internal */
export const PostV2FilesBulkRequestBody$outboundSchema: z.ZodType<
  PostV2FilesBulkRequestBody$Outbound,
  z.ZodTypeDef,
  PostV2FilesBulkRequestBody
> = z.object({
  files: z.array(z.any()),
  purpose: PostV2FilesBulkPurpose$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2FilesBulkRequestBody$ {
  /** @deprecated use `PostV2FilesBulkRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV2FilesBulkRequestBody$inboundSchema;
  /** @deprecated use `PostV2FilesBulkRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV2FilesBulkRequestBody$outboundSchema;
  /** @deprecated use `PostV2FilesBulkRequestBody$Outbound` instead. */
  export type Outbound = PostV2FilesBulkRequestBody$Outbound;
}

/** @internal */
export const PostV2FilesBulkFilesPurpose$inboundSchema: z.ZodNativeEnum<
  typeof PostV2FilesBulkFilesPurpose
> = z.nativeEnum(PostV2FilesBulkFilesPurpose);

/** @internal */
export const PostV2FilesBulkFilesPurpose$outboundSchema: z.ZodNativeEnum<
  typeof PostV2FilesBulkFilesPurpose
> = PostV2FilesBulkFilesPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2FilesBulkFilesPurpose$ {
  /** @deprecated use `PostV2FilesBulkFilesPurpose$inboundSchema` instead. */
  export const inboundSchema = PostV2FilesBulkFilesPurpose$inboundSchema;
  /** @deprecated use `PostV2FilesBulkFilesPurpose$outboundSchema` instead. */
  export const outboundSchema = PostV2FilesBulkFilesPurpose$outboundSchema;
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<
  ResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  object_name: z.string(),
  purpose: PostV2FilesBulkFilesPurpose$inboundSchema,
  bytes: z.number(),
  file_name: z.string(),
  created: z.string().datetime({ offset: true }).default(
    "2024-10-22T07:23:04.563Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "object_name": "objectName",
    "file_name": "fileName",
  });
});

/** @internal */
export type ResponseBody$Outbound = {
  _id: string;
  object_name: string;
  purpose: string;
  bytes: number;
  file_name: string;
  created: string;
};

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
  ResponseBody$Outbound,
  z.ZodTypeDef,
  ResponseBody
> = z.object({
  id: z.string(),
  objectName: z.string(),
  purpose: PostV2FilesBulkFilesPurpose$outboundSchema,
  bytes: z.number(),
  fileName: z.string(),
  created: z.date().default(() => new Date("2024-10-22T07:23:04.563Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    id: "_id",
    objectName: "object_name",
    fileName: "file_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
  /** @deprecated use `ResponseBody$inboundSchema` instead. */
  export const inboundSchema = ResponseBody$inboundSchema;
  /** @deprecated use `ResponseBody$outboundSchema` instead. */
  export const outboundSchema = ResponseBody$outboundSchema;
  /** @deprecated use `ResponseBody$Outbound` instead. */
  export type Outbound = ResponseBody$Outbound;
}
