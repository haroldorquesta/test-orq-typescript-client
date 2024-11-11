/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";
import { ClosedEnum } from "../../types/enums.js";

export type FileT = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/**
 * The intended purpose of the uploaded file.
 */
export const Purpose = {
  Retrieval: "retrieval",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type Purpose = ClosedEnum<typeof Purpose>;

export type PostV2FilesRequestBody = {
  /**
   * The file to be uploaded.
   */
  file?: FileT | Blob | undefined;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose?: Purpose | undefined;
};

/**
 * The intended purpose of the uploaded file.
 */
export const PostV2FilesPurpose = {
  Retrieval: "retrieval",
} as const;
/**
 * The intended purpose of the uploaded file.
 */
export type PostV2FilesPurpose = ClosedEnum<typeof PostV2FilesPurpose>;

/**
 * File uploaded successfully
 */
export type PostV2FilesResponseBody = {
  id: string;
  /**
   * path to the file in the storage
   */
  objectName: string;
  /**
   * The intended purpose of the uploaded file.
   */
  purpose: PostV2FilesPurpose;
  bytes: number;
  fileName: string;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z
  .object({
    fileName: z.string(),
    content: z.union([
      z.instanceof(ReadableStream<Uint8Array>),
      z.instanceof(Blob),
      z.instanceof(ArrayBuffer),
      z.instanceof(Uint8Array),
    ]),
  });

/** @internal */
export type FileT$Outbound = {
  fileName: string;
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<
  FileT$Outbound,
  z.ZodTypeDef,
  FileT
> = z.object({
  fileName: z.string(),
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
  /** @deprecated use `FileT$inboundSchema` instead. */
  export const inboundSchema = FileT$inboundSchema;
  /** @deprecated use `FileT$outboundSchema` instead. */
  export const outboundSchema = FileT$outboundSchema;
  /** @deprecated use `FileT$Outbound` instead. */
  export type Outbound = FileT$Outbound;
}

/** @internal */
export const Purpose$inboundSchema: z.ZodNativeEnum<typeof Purpose> = z
  .nativeEnum(Purpose);

/** @internal */
export const Purpose$outboundSchema: z.ZodNativeEnum<typeof Purpose> =
  Purpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Purpose$ {
  /** @deprecated use `Purpose$inboundSchema` instead. */
  export const inboundSchema = Purpose$inboundSchema;
  /** @deprecated use `Purpose$outboundSchema` instead. */
  export const outboundSchema = Purpose$outboundSchema;
}

/** @internal */
export const PostV2FilesRequestBody$inboundSchema: z.ZodType<
  PostV2FilesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => FileT$inboundSchema).optional(),
  purpose: Purpose$inboundSchema.default("retrieval"),
});

/** @internal */
export type PostV2FilesRequestBody$Outbound = {
  file?: FileT$Outbound | Blob | undefined;
  purpose: string;
};

/** @internal */
export const PostV2FilesRequestBody$outboundSchema: z.ZodType<
  PostV2FilesRequestBody$Outbound,
  z.ZodTypeDef,
  PostV2FilesRequestBody
> = z.object({
  file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema).optional(),
  purpose: Purpose$outboundSchema.default("retrieval"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2FilesRequestBody$ {
  /** @deprecated use `PostV2FilesRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV2FilesRequestBody$inboundSchema;
  /** @deprecated use `PostV2FilesRequestBody$outboundSchema` instead. */
  export const outboundSchema = PostV2FilesRequestBody$outboundSchema;
  /** @deprecated use `PostV2FilesRequestBody$Outbound` instead. */
  export type Outbound = PostV2FilesRequestBody$Outbound;
}

/** @internal */
export const PostV2FilesPurpose$inboundSchema: z.ZodNativeEnum<
  typeof PostV2FilesPurpose
> = z.nativeEnum(PostV2FilesPurpose);

/** @internal */
export const PostV2FilesPurpose$outboundSchema: z.ZodNativeEnum<
  typeof PostV2FilesPurpose
> = PostV2FilesPurpose$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2FilesPurpose$ {
  /** @deprecated use `PostV2FilesPurpose$inboundSchema` instead. */
  export const inboundSchema = PostV2FilesPurpose$inboundSchema;
  /** @deprecated use `PostV2FilesPurpose$outboundSchema` instead. */
  export const outboundSchema = PostV2FilesPurpose$outboundSchema;
}

/** @internal */
export const PostV2FilesResponseBody$inboundSchema: z.ZodType<
  PostV2FilesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  _id: z.string(),
  object_name: z.string(),
  purpose: PostV2FilesPurpose$inboundSchema,
  bytes: z.number(),
  file_name: z.string(),
  created: z.string().datetime({ offset: true }).default(
    "2024-11-05T13:45:01.500Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "_id": "id",
    "object_name": "objectName",
    "file_name": "fileName",
  });
});

/** @internal */
export type PostV2FilesResponseBody$Outbound = {
  _id: string;
  object_name: string;
  purpose: string;
  bytes: number;
  file_name: string;
  created: string;
};

/** @internal */
export const PostV2FilesResponseBody$outboundSchema: z.ZodType<
  PostV2FilesResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2FilesResponseBody
> = z.object({
  id: z.string(),
  objectName: z.string(),
  purpose: PostV2FilesPurpose$outboundSchema,
  bytes: z.number(),
  fileName: z.string(),
  created: z.date().default(() => new Date("2024-11-05T13:45:01.500Z"))
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
export namespace PostV2FilesResponseBody$ {
  /** @deprecated use `PostV2FilesResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostV2FilesResponseBody$inboundSchema;
  /** @deprecated use `PostV2FilesResponseBody$outboundSchema` instead. */
  export const outboundSchema = PostV2FilesResponseBody$outboundSchema;
  /** @deprecated use `PostV2FilesResponseBody$Outbound` instead. */
  export type Outbound = PostV2FilesResponseBody$Outbound;
}
