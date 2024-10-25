/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Input text to embed, encoded as a string or array of tokens.
 */
export type Input = string | Array<string>;

/**
 * Type of the document element
 */
export const EncodingFormat = {
  Base64: "base64",
  Float: "float",
} as const;
/**
 * Type of the document element
 */
export type EncodingFormat = ClosedEnum<typeof EncodingFormat>;

export type PostV2RouterEmbeddingsRequestBody = {
  /**
   * Input text to embed, encoded as a string or array of tokens.
   */
  input: string | Array<string>;
  /**
   * ID of the model to use
   */
  model: string;
  /**
   * Type of the document element
   */
  encodingFormat?: EncodingFormat | undefined;
  /**
   * The number of dimensions the resulting output embeddings should have.
   */
  dimensions?: number | undefined;
  /**
   * A unique identifier representing your end-user
   */
  user?: string | undefined;
};

export const PostV2RouterEmbeddingsObject = {
  List: "list",
} as const;
export type PostV2RouterEmbeddingsObject = ClosedEnum<
  typeof PostV2RouterEmbeddingsObject
>;

/**
 * The object type, which is always "embedding".
 */
export const PostV2RouterEmbeddingsRouterObject = {
  Embedding: "embedding",
} as const;
/**
 * The object type, which is always "embedding".
 */
export type PostV2RouterEmbeddingsRouterObject = ClosedEnum<
  typeof PostV2RouterEmbeddingsRouterObject
>;

/**
 * The embedding result.
 */
export type Embedding = Array<number> | string;

export type PostV2RouterEmbeddingsData = {
  /**
   * The object type, which is always "embedding".
   */
  object: PostV2RouterEmbeddingsRouterObject;
  /**
   * The embedding result.
   */
  embedding: Array<number> | string;
  /**
   * The index of the embedding in the list of embeddings.
   */
  index: number;
};

export type PostV2RouterEmbeddingsUsage = {
  promptTokens: number;
  totalTokens: number;
};

/**
 * Embeddings created
 */
export type PostV2RouterEmbeddingsResponseBody = {
  object: PostV2RouterEmbeddingsObject;
  data: Array<PostV2RouterEmbeddingsData>;
  /**
   * ID of the model to use
   */
  model: string;
  usage: PostV2RouterEmbeddingsUsage;
};

/** @internal */
export const Input$inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.string())]);

/** @internal */
export type Input$Outbound = string | Array<string>;

/** @internal */
export const Input$outboundSchema: z.ZodType<
  Input$Outbound,
  z.ZodTypeDef,
  Input
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Input$ {
  /** @deprecated use `Input$inboundSchema` instead. */
  export const inboundSchema = Input$inboundSchema;
  /** @deprecated use `Input$outboundSchema` instead. */
  export const outboundSchema = Input$outboundSchema;
  /** @deprecated use `Input$Outbound` instead. */
  export type Outbound = Input$Outbound;
}

/** @internal */
export const EncodingFormat$inboundSchema: z.ZodNativeEnum<
  typeof EncodingFormat
> = z.nativeEnum(EncodingFormat);

/** @internal */
export const EncodingFormat$outboundSchema: z.ZodNativeEnum<
  typeof EncodingFormat
> = EncodingFormat$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncodingFormat$ {
  /** @deprecated use `EncodingFormat$inboundSchema` instead. */
  export const inboundSchema = EncodingFormat$inboundSchema;
  /** @deprecated use `EncodingFormat$outboundSchema` instead. */
  export const outboundSchema = EncodingFormat$outboundSchema;
}

/** @internal */
export const PostV2RouterEmbeddingsRequestBody$inboundSchema: z.ZodType<
  PostV2RouterEmbeddingsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  input: z.union([z.string(), z.array(z.string())]),
  model: z.string(),
  encoding_format: EncodingFormat$inboundSchema.default("float"),
  dimensions: z.number().optional(),
  user: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "encoding_format": "encodingFormat",
  });
});

/** @internal */
export type PostV2RouterEmbeddingsRequestBody$Outbound = {
  input: string | Array<string>;
  model: string;
  encoding_format: string;
  dimensions?: number | undefined;
  user?: string | undefined;
};

/** @internal */
export const PostV2RouterEmbeddingsRequestBody$outboundSchema: z.ZodType<
  PostV2RouterEmbeddingsRequestBody$Outbound,
  z.ZodTypeDef,
  PostV2RouterEmbeddingsRequestBody
> = z.object({
  input: z.union([z.string(), z.array(z.string())]),
  model: z.string(),
  encodingFormat: EncodingFormat$outboundSchema.default("float"),
  dimensions: z.number().optional(),
  user: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    encodingFormat: "encoding_format",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2RouterEmbeddingsRequestBody$ {
  /** @deprecated use `PostV2RouterEmbeddingsRequestBody$inboundSchema` instead. */
  export const inboundSchema = PostV2RouterEmbeddingsRequestBody$inboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2RouterEmbeddingsRequestBody$outboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsRequestBody$Outbound` instead. */
  export type Outbound = PostV2RouterEmbeddingsRequestBody$Outbound;
}

/** @internal */
export const PostV2RouterEmbeddingsObject$inboundSchema: z.ZodNativeEnum<
  typeof PostV2RouterEmbeddingsObject
> = z.nativeEnum(PostV2RouterEmbeddingsObject);

/** @internal */
export const PostV2RouterEmbeddingsObject$outboundSchema: z.ZodNativeEnum<
  typeof PostV2RouterEmbeddingsObject
> = PostV2RouterEmbeddingsObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2RouterEmbeddingsObject$ {
  /** @deprecated use `PostV2RouterEmbeddingsObject$inboundSchema` instead. */
  export const inboundSchema = PostV2RouterEmbeddingsObject$inboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsObject$outboundSchema` instead. */
  export const outboundSchema = PostV2RouterEmbeddingsObject$outboundSchema;
}

/** @internal */
export const PostV2RouterEmbeddingsRouterObject$inboundSchema: z.ZodNativeEnum<
  typeof PostV2RouterEmbeddingsRouterObject
> = z.nativeEnum(PostV2RouterEmbeddingsRouterObject);

/** @internal */
export const PostV2RouterEmbeddingsRouterObject$outboundSchema: z.ZodNativeEnum<
  typeof PostV2RouterEmbeddingsRouterObject
> = PostV2RouterEmbeddingsRouterObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2RouterEmbeddingsRouterObject$ {
  /** @deprecated use `PostV2RouterEmbeddingsRouterObject$inboundSchema` instead. */
  export const inboundSchema = PostV2RouterEmbeddingsRouterObject$inboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsRouterObject$outboundSchema` instead. */
  export const outboundSchema =
    PostV2RouterEmbeddingsRouterObject$outboundSchema;
}

/** @internal */
export const Embedding$inboundSchema: z.ZodType<
  Embedding,
  z.ZodTypeDef,
  unknown
> = z.union([z.array(z.number()), z.string()]);

/** @internal */
export type Embedding$Outbound = Array<number> | string;

/** @internal */
export const Embedding$outboundSchema: z.ZodType<
  Embedding$Outbound,
  z.ZodTypeDef,
  Embedding
> = z.union([z.array(z.number()), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Embedding$ {
  /** @deprecated use `Embedding$inboundSchema` instead. */
  export const inboundSchema = Embedding$inboundSchema;
  /** @deprecated use `Embedding$outboundSchema` instead. */
  export const outboundSchema = Embedding$outboundSchema;
  /** @deprecated use `Embedding$Outbound` instead. */
  export type Outbound = Embedding$Outbound;
}

/** @internal */
export const PostV2RouterEmbeddingsData$inboundSchema: z.ZodType<
  PostV2RouterEmbeddingsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: PostV2RouterEmbeddingsRouterObject$inboundSchema,
  embedding: z.union([z.array(z.number()), z.string()]),
  index: z.number(),
});

/** @internal */
export type PostV2RouterEmbeddingsData$Outbound = {
  object: string;
  embedding: Array<number> | string;
  index: number;
};

/** @internal */
export const PostV2RouterEmbeddingsData$outboundSchema: z.ZodType<
  PostV2RouterEmbeddingsData$Outbound,
  z.ZodTypeDef,
  PostV2RouterEmbeddingsData
> = z.object({
  object: PostV2RouterEmbeddingsRouterObject$outboundSchema,
  embedding: z.union([z.array(z.number()), z.string()]),
  index: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2RouterEmbeddingsData$ {
  /** @deprecated use `PostV2RouterEmbeddingsData$inboundSchema` instead. */
  export const inboundSchema = PostV2RouterEmbeddingsData$inboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsData$outboundSchema` instead. */
  export const outboundSchema = PostV2RouterEmbeddingsData$outboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsData$Outbound` instead. */
  export type Outbound = PostV2RouterEmbeddingsData$Outbound;
}

/** @internal */
export const PostV2RouterEmbeddingsUsage$inboundSchema: z.ZodType<
  PostV2RouterEmbeddingsUsage,
  z.ZodTypeDef,
  unknown
> = z.object({
  prompt_tokens: z.number(),
  total_tokens: z.number(),
}).transform((v) => {
  return remap$(v, {
    "prompt_tokens": "promptTokens",
    "total_tokens": "totalTokens",
  });
});

/** @internal */
export type PostV2RouterEmbeddingsUsage$Outbound = {
  prompt_tokens: number;
  total_tokens: number;
};

/** @internal */
export const PostV2RouterEmbeddingsUsage$outboundSchema: z.ZodType<
  PostV2RouterEmbeddingsUsage$Outbound,
  z.ZodTypeDef,
  PostV2RouterEmbeddingsUsage
> = z.object({
  promptTokens: z.number(),
  totalTokens: z.number(),
}).transform((v) => {
  return remap$(v, {
    promptTokens: "prompt_tokens",
    totalTokens: "total_tokens",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2RouterEmbeddingsUsage$ {
  /** @deprecated use `PostV2RouterEmbeddingsUsage$inboundSchema` instead. */
  export const inboundSchema = PostV2RouterEmbeddingsUsage$inboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsUsage$outboundSchema` instead. */
  export const outboundSchema = PostV2RouterEmbeddingsUsage$outboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsUsage$Outbound` instead. */
  export type Outbound = PostV2RouterEmbeddingsUsage$Outbound;
}

/** @internal */
export const PostV2RouterEmbeddingsResponseBody$inboundSchema: z.ZodType<
  PostV2RouterEmbeddingsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: PostV2RouterEmbeddingsObject$inboundSchema,
  data: z.array(z.lazy(() => PostV2RouterEmbeddingsData$inboundSchema)),
  model: z.string(),
  usage: z.lazy(() => PostV2RouterEmbeddingsUsage$inboundSchema),
});

/** @internal */
export type PostV2RouterEmbeddingsResponseBody$Outbound = {
  object: string;
  data: Array<PostV2RouterEmbeddingsData$Outbound>;
  model: string;
  usage: PostV2RouterEmbeddingsUsage$Outbound;
};

/** @internal */
export const PostV2RouterEmbeddingsResponseBody$outboundSchema: z.ZodType<
  PostV2RouterEmbeddingsResponseBody$Outbound,
  z.ZodTypeDef,
  PostV2RouterEmbeddingsResponseBody
> = z.object({
  object: PostV2RouterEmbeddingsObject$outboundSchema,
  data: z.array(z.lazy(() => PostV2RouterEmbeddingsData$outboundSchema)),
  model: z.string(),
  usage: z.lazy(() => PostV2RouterEmbeddingsUsage$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV2RouterEmbeddingsResponseBody$ {
  /** @deprecated use `PostV2RouterEmbeddingsResponseBody$inboundSchema` instead. */
  export const inboundSchema = PostV2RouterEmbeddingsResponseBody$inboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    PostV2RouterEmbeddingsResponseBody$outboundSchema;
  /** @deprecated use `PostV2RouterEmbeddingsResponseBody$Outbound` instead. */
  export type Outbound = PostV2RouterEmbeddingsResponseBody$Outbound;
}
