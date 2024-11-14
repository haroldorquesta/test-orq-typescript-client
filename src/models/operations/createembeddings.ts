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

export type CreateEmbeddingsRequestBody = {
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

export const CreateEmbeddingsObject = {
  List: "list",
} as const;
export type CreateEmbeddingsObject = ClosedEnum<typeof CreateEmbeddingsObject>;

/**
 * The object type, which is always "embedding".
 */
export const CreateEmbeddingsRouterEmbeddingsObject = {
  Embedding: "embedding",
} as const;
/**
 * The object type, which is always "embedding".
 */
export type CreateEmbeddingsRouterEmbeddingsObject = ClosedEnum<
  typeof CreateEmbeddingsRouterEmbeddingsObject
>;

/**
 * The embedding result.
 */
export type Embedding = Array<number> | string;

export type CreateEmbeddingsData = {
  /**
   * The object type, which is always "embedding".
   */
  object: CreateEmbeddingsRouterEmbeddingsObject;
  /**
   * The embedding result.
   */
  embedding: Array<number> | string;
  /**
   * The index of the embedding in the list of embeddings.
   */
  index: number;
};

export type CreateEmbeddingsUsage = {
  promptTokens: number;
  totalTokens: number;
};

/**
 * Embeddings created
 */
export type CreateEmbeddingsResponseBody = {
  object: CreateEmbeddingsObject;
  data: Array<CreateEmbeddingsData>;
  /**
   * ID of the model to use
   */
  model: string;
  usage: CreateEmbeddingsUsage;
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
export const CreateEmbeddingsRequestBody$inboundSchema: z.ZodType<
  CreateEmbeddingsRequestBody,
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
export type CreateEmbeddingsRequestBody$Outbound = {
  input: string | Array<string>;
  model: string;
  encoding_format: string;
  dimensions?: number | undefined;
  user?: string | undefined;
};

/** @internal */
export const CreateEmbeddingsRequestBody$outboundSchema: z.ZodType<
  CreateEmbeddingsRequestBody$Outbound,
  z.ZodTypeDef,
  CreateEmbeddingsRequestBody
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
export namespace CreateEmbeddingsRequestBody$ {
  /** @deprecated use `CreateEmbeddingsRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreateEmbeddingsRequestBody$inboundSchema;
  /** @deprecated use `CreateEmbeddingsRequestBody$outboundSchema` instead. */
  export const outboundSchema = CreateEmbeddingsRequestBody$outboundSchema;
  /** @deprecated use `CreateEmbeddingsRequestBody$Outbound` instead. */
  export type Outbound = CreateEmbeddingsRequestBody$Outbound;
}

/** @internal */
export const CreateEmbeddingsObject$inboundSchema: z.ZodNativeEnum<
  typeof CreateEmbeddingsObject
> = z.nativeEnum(CreateEmbeddingsObject);

/** @internal */
export const CreateEmbeddingsObject$outboundSchema: z.ZodNativeEnum<
  typeof CreateEmbeddingsObject
> = CreateEmbeddingsObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbeddingsObject$ {
  /** @deprecated use `CreateEmbeddingsObject$inboundSchema` instead. */
  export const inboundSchema = CreateEmbeddingsObject$inboundSchema;
  /** @deprecated use `CreateEmbeddingsObject$outboundSchema` instead. */
  export const outboundSchema = CreateEmbeddingsObject$outboundSchema;
}

/** @internal */
export const CreateEmbeddingsRouterEmbeddingsObject$inboundSchema:
  z.ZodNativeEnum<typeof CreateEmbeddingsRouterEmbeddingsObject> = z.nativeEnum(
    CreateEmbeddingsRouterEmbeddingsObject,
  );

/** @internal */
export const CreateEmbeddingsRouterEmbeddingsObject$outboundSchema:
  z.ZodNativeEnum<typeof CreateEmbeddingsRouterEmbeddingsObject> =
    CreateEmbeddingsRouterEmbeddingsObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbeddingsRouterEmbeddingsObject$ {
  /** @deprecated use `CreateEmbeddingsRouterEmbeddingsObject$inboundSchema` instead. */
  export const inboundSchema =
    CreateEmbeddingsRouterEmbeddingsObject$inboundSchema;
  /** @deprecated use `CreateEmbeddingsRouterEmbeddingsObject$outboundSchema` instead. */
  export const outboundSchema =
    CreateEmbeddingsRouterEmbeddingsObject$outboundSchema;
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
export const CreateEmbeddingsData$inboundSchema: z.ZodType<
  CreateEmbeddingsData,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: CreateEmbeddingsRouterEmbeddingsObject$inboundSchema,
  embedding: z.union([z.array(z.number()), z.string()]),
  index: z.number(),
});

/** @internal */
export type CreateEmbeddingsData$Outbound = {
  object: string;
  embedding: Array<number> | string;
  index: number;
};

/** @internal */
export const CreateEmbeddingsData$outboundSchema: z.ZodType<
  CreateEmbeddingsData$Outbound,
  z.ZodTypeDef,
  CreateEmbeddingsData
> = z.object({
  object: CreateEmbeddingsRouterEmbeddingsObject$outboundSchema,
  embedding: z.union([z.array(z.number()), z.string()]),
  index: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbeddingsData$ {
  /** @deprecated use `CreateEmbeddingsData$inboundSchema` instead. */
  export const inboundSchema = CreateEmbeddingsData$inboundSchema;
  /** @deprecated use `CreateEmbeddingsData$outboundSchema` instead. */
  export const outboundSchema = CreateEmbeddingsData$outboundSchema;
  /** @deprecated use `CreateEmbeddingsData$Outbound` instead. */
  export type Outbound = CreateEmbeddingsData$Outbound;
}

/** @internal */
export const CreateEmbeddingsUsage$inboundSchema: z.ZodType<
  CreateEmbeddingsUsage,
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
export type CreateEmbeddingsUsage$Outbound = {
  prompt_tokens: number;
  total_tokens: number;
};

/** @internal */
export const CreateEmbeddingsUsage$outboundSchema: z.ZodType<
  CreateEmbeddingsUsage$Outbound,
  z.ZodTypeDef,
  CreateEmbeddingsUsage
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
export namespace CreateEmbeddingsUsage$ {
  /** @deprecated use `CreateEmbeddingsUsage$inboundSchema` instead. */
  export const inboundSchema = CreateEmbeddingsUsage$inboundSchema;
  /** @deprecated use `CreateEmbeddingsUsage$outboundSchema` instead. */
  export const outboundSchema = CreateEmbeddingsUsage$outboundSchema;
  /** @deprecated use `CreateEmbeddingsUsage$Outbound` instead. */
  export type Outbound = CreateEmbeddingsUsage$Outbound;
}

/** @internal */
export const CreateEmbeddingsResponseBody$inboundSchema: z.ZodType<
  CreateEmbeddingsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  object: CreateEmbeddingsObject$inboundSchema,
  data: z.array(z.lazy(() => CreateEmbeddingsData$inboundSchema)),
  model: z.string(),
  usage: z.lazy(() => CreateEmbeddingsUsage$inboundSchema),
});

/** @internal */
export type CreateEmbeddingsResponseBody$Outbound = {
  object: string;
  data: Array<CreateEmbeddingsData$Outbound>;
  model: string;
  usage: CreateEmbeddingsUsage$Outbound;
};

/** @internal */
export const CreateEmbeddingsResponseBody$outboundSchema: z.ZodType<
  CreateEmbeddingsResponseBody$Outbound,
  z.ZodTypeDef,
  CreateEmbeddingsResponseBody
> = z.object({
  object: CreateEmbeddingsObject$outboundSchema,
  data: z.array(z.lazy(() => CreateEmbeddingsData$outboundSchema)),
  model: z.string(),
  usage: z.lazy(() => CreateEmbeddingsUsage$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateEmbeddingsResponseBody$ {
  /** @deprecated use `CreateEmbeddingsResponseBody$inboundSchema` instead. */
  export const inboundSchema = CreateEmbeddingsResponseBody$inboundSchema;
  /** @deprecated use `CreateEmbeddingsResponseBody$outboundSchema` instead. */
  export const outboundSchema = CreateEmbeddingsResponseBody$outboundSchema;
  /** @deprecated use `CreateEmbeddingsResponseBody$Outbound` instead. */
  export type Outbound = CreateEmbeddingsResponseBody$Outbound;
}
