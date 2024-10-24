/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export type GetV2ResourcesDatasetsDatasetIdRowsRequest = {
  /**
   * Dataset ID
   */
  datasetId: string;
};

/**
 * The role of the prompt message
 */
export const GetV2ResourcesDatasetsDatasetIdRowsRole = {
  System: "system",
  Assistant: "assistant",
  User: "user",
  Exception: "exception",
  Tool: "tool",
  Prompt: "prompt",
  Correction: "correction",
  ExpectedOutput: "expected_output",
} as const;
/**
 * The role of the prompt message
 */
export type GetV2ResourcesDatasetsDatasetIdRowsRole = ClosedEnum<
  typeof GetV2ResourcesDatasetsDatasetIdRowsRole
>;

export const GetV2ResourcesDatasetsDatasetIdRows2ResourcesType = {
  ImageUrl: "image_url",
} as const;
export type GetV2ResourcesDatasetsDatasetIdRows2ResourcesType = ClosedEnum<
  typeof GetV2ResourcesDatasetsDatasetIdRows2ResourcesType
>;

export type GetV2ResourcesDatasetsDatasetIdRows2ImageUrl = {
  /**
   * The orq.ai id of the image
   */
  id?: string | undefined;
  /**
   * Either a URL of the image or the base64 encoded data URI.
   */
  url: string;
  /**
   * Specifies the detail level of the image. Currently only supported with OpenAI models
   */
  detail?: string | undefined;
};

/**
 * The image part of the prompt message. Only supported with vision models.
 */
export type GetV2ResourcesDatasetsDatasetIdRows22 = {
  type: GetV2ResourcesDatasetsDatasetIdRows2ResourcesType;
  imageUrl: GetV2ResourcesDatasetsDatasetIdRows2ImageUrl;
};

export const GetV2ResourcesDatasetsDatasetIdRows2Type = {
  Text: "text",
} as const;
export type GetV2ResourcesDatasetsDatasetIdRows2Type = ClosedEnum<
  typeof GetV2ResourcesDatasetsDatasetIdRows2Type
>;

/**
 * Text content part of a prompt message
 */
export type GetV2ResourcesDatasetsDatasetIdRows21 = {
  type: GetV2ResourcesDatasetsDatasetIdRows2Type;
  text: string;
};

export type GetV2ResourcesDatasetsDatasetIdRowsContent2 =
  | GetV2ResourcesDatasetsDatasetIdRows21
  | GetV2ResourcesDatasetsDatasetIdRows22;

/**
 * The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.
 */
export type GetV2ResourcesDatasetsDatasetIdRowsContent =
  | string
  | Array<
    | GetV2ResourcesDatasetsDatasetIdRows21
    | GetV2ResourcesDatasetsDatasetIdRows22
  >;

export const GetV2ResourcesDatasetsDatasetIdRowsType = {
  Function: "function",
} as const;
export type GetV2ResourcesDatasetsDatasetIdRowsType = ClosedEnum<
  typeof GetV2ResourcesDatasetsDatasetIdRowsType
>;

export type GetV2ResourcesDatasetsDatasetIdRowsFunction = {
  name: string;
  /**
   * JSON string arguments for the functions
   */
  arguments: string;
};

export type GetV2ResourcesDatasetsDatasetIdRowsToolCalls = {
  id?: string | undefined;
  index?: number | undefined;
  type: GetV2ResourcesDatasetsDatasetIdRowsType;
  function: GetV2ResourcesDatasetsDatasetIdRowsFunction;
};

export type GetV2ResourcesDatasetsDatasetIdRowsMessages = {
  /**
   * The role of the prompt message
   */
  role: GetV2ResourcesDatasetsDatasetIdRowsRole;
  /**
   * The contents of the user message. Either the text content of the message or an array of content parts with a defined type, each can be of type `text` or `image_url` when passing in images. You can pass multiple images by adding multiple `image_url` content parts.
   */
  content:
    | string
    | Array<
      | GetV2ResourcesDatasetsDatasetIdRows21
      | GetV2ResourcesDatasetsDatasetIdRows22
    >;
  toolCalls?: Array<GetV2ResourcesDatasetsDatasetIdRowsToolCalls> | undefined;
};

/**
 * Returned dataset row model from the API.
 */
export type GetV2ResourcesDatasetsDatasetIdRowsItems = {
  id: string;
  /**
   * Input message(s) of the dataset row
   */
  messages: Array<GetV2ResourcesDatasetsDatasetIdRowsMessages>;
  /**
   * Reference of the dataset row
   */
  expectedOutput?: string | null | undefined;
  /**
   * The date and time the resource was created
   */
  created?: Date | undefined;
  /**
   * The date and time the resource was last updated
   */
  updated?: Date | undefined;
};

/**
 * Dataset rows Retrieved.
 */
export type GetV2ResourcesDatasetsDatasetIdRowsResponseBody = {
  count: number;
  page: number;
  limit: number;
  totalPages: number;
  items: Array<GetV2ResourcesDatasetsDatasetIdRowsItems>;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsRequest$inboundSchema:
  z.ZodType<GetV2ResourcesDatasetsDatasetIdRowsRequest, z.ZodTypeDef, unknown> =
    z.object({
      dataset_id: z.string(),
    }).transform((v) => {
      return remap$(v, {
        "dataset_id": "datasetId",
      });
    });

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsRequest$Outbound = {
  dataset_id: string;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsRequest$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsRequest$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsRequest
  > = z.object({
    datasetId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      datasetId: "dataset_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsRequest$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsRequest$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsRequest$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsRequest$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsRequest$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsRequest$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsRequest$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsRole$inboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRowsRole> = z
    .nativeEnum(GetV2ResourcesDatasetsDatasetIdRowsRole);

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsRole$outboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRowsRole> =
    GetV2ResourcesDatasetsDatasetIdRowsRole$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsRole$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsRole$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsRole$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsRole$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsRole$outboundSchema;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$inboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRows2ResourcesType> = z
    .nativeEnum(GetV2ResourcesDatasetsDatasetIdRows2ResourcesType);

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$outboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRows2ResourcesType> =
    GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$outboundSchema;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$inboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string().optional(),
    url: z.string(),
    detail: z.string().optional(),
  });

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$Outbound = {
  id?: string | undefined;
  url: string;
  detail?: string | undefined;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl
  > = z.object({
    id: z.string().optional(),
    url: z.string(),
    detail: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows22$inboundSchema: z.ZodType<
  GetV2ResourcesDatasetsDatasetIdRows22,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$inboundSchema,
  image_url: z.lazy(() =>
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$inboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    "image_url": "imageUrl",
  });
});

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRows22$Outbound = {
  type: string;
  image_url: GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$Outbound;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows22$outboundSchema: z.ZodType<
  GetV2ResourcesDatasetsDatasetIdRows22$Outbound,
  z.ZodTypeDef,
  GetV2ResourcesDatasetsDatasetIdRows22
> = z.object({
  type: GetV2ResourcesDatasetsDatasetIdRows2ResourcesType$outboundSchema,
  imageUrl: z.lazy(() =>
    GetV2ResourcesDatasetsDatasetIdRows2ImageUrl$outboundSchema
  ),
}).transform((v) => {
  return remap$(v, {
    imageUrl: "image_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRows22$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows22$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows22$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows22$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows22$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows22$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRows22$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows2Type$inboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRows2Type> = z
    .nativeEnum(GetV2ResourcesDatasetsDatasetIdRows2Type);

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows2Type$outboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRows2Type> =
    GetV2ResourcesDatasetsDatasetIdRows2Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRows2Type$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2Type$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows2Type$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows2Type$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows2Type$outboundSchema;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows21$inboundSchema: z.ZodType<
  GetV2ResourcesDatasetsDatasetIdRows21,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: GetV2ResourcesDatasetsDatasetIdRows2Type$inboundSchema,
  text: z.string(),
});

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRows21$Outbound = {
  type: string;
  text: string;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRows21$outboundSchema: z.ZodType<
  GetV2ResourcesDatasetsDatasetIdRows21$Outbound,
  z.ZodTypeDef,
  GetV2ResourcesDatasetsDatasetIdRows21
> = z.object({
  type: GetV2ResourcesDatasetsDatasetIdRows2Type$outboundSchema,
  text: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRows21$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows21$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows21$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows21$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRows21$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRows21$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRows21$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsContent2$inboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsContent2,
    z.ZodTypeDef,
    unknown
  > = z.union([
    z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows21$inboundSchema),
    z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows22$inboundSchema),
  ]);

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsContent2$Outbound =
  | GetV2ResourcesDatasetsDatasetIdRows21$Outbound
  | GetV2ResourcesDatasetsDatasetIdRows22$Outbound;

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsContent2$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsContent2$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsContent2
  > = z.union([
    z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows21$outboundSchema),
    z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows22$outboundSchema),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsContent2$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsContent2$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsContent2$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsContent2$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsContent2$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsContent2$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsContent2$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsContent$inboundSchema:
  z.ZodType<GetV2ResourcesDatasetsDatasetIdRowsContent, z.ZodTypeDef, unknown> =
    z.union([
      z.string(),
      z.array(z.union([
        z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows21$inboundSchema),
        z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows22$inboundSchema),
      ])),
    ]);

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsContent$Outbound =
  | string
  | Array<
    | GetV2ResourcesDatasetsDatasetIdRows21$Outbound
    | GetV2ResourcesDatasetsDatasetIdRows22$Outbound
  >;

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsContent$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsContent$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsContent
  > = z.union([
    z.string(),
    z.array(z.union([
      z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows21$outboundSchema),
      z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows22$outboundSchema),
    ])),
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsContent$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsContent$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsContent$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsContent$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsContent$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsContent$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsContent$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsType$inboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRowsType> = z
    .nativeEnum(GetV2ResourcesDatasetsDatasetIdRowsType);

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsType$outboundSchema:
  z.ZodNativeEnum<typeof GetV2ResourcesDatasetsDatasetIdRowsType> =
    GetV2ResourcesDatasetsDatasetIdRowsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsType$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsType$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsType$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsType$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsType$outboundSchema;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsFunction$inboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsFunction,
    z.ZodTypeDef,
    unknown
  > = z.object({
    name: z.string(),
    arguments: z.string(),
  });

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsFunction$Outbound = {
  name: string;
  arguments: string;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsFunction$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsFunction$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsFunction
  > = z.object({
    name: z.string(),
    arguments: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsFunction$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsFunction$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsFunction$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsFunction$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsFunction$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsFunction$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsFunction$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsToolCalls$inboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsToolCalls,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string().optional(),
    index: z.number().optional(),
    type: GetV2ResourcesDatasetsDatasetIdRowsType$inboundSchema,
    function: z.lazy(() =>
      GetV2ResourcesDatasetsDatasetIdRowsFunction$inboundSchema
    ),
  });

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsToolCalls$Outbound = {
  id?: string | undefined;
  index?: number | undefined;
  type: string;
  function: GetV2ResourcesDatasetsDatasetIdRowsFunction$Outbound;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsToolCalls$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsToolCalls$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsToolCalls
  > = z.object({
    id: z.string().optional(),
    index: z.number().optional(),
    type: GetV2ResourcesDatasetsDatasetIdRowsType$outboundSchema,
    function: z.lazy(() =>
      GetV2ResourcesDatasetsDatasetIdRowsFunction$outboundSchema
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsToolCalls$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsToolCalls$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsToolCalls$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsToolCalls$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsToolCalls$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsToolCalls$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsToolCalls$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsMessages$inboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsMessages,
    z.ZodTypeDef,
    unknown
  > = z.object({
    role: GetV2ResourcesDatasetsDatasetIdRowsRole$inboundSchema,
    content: z.union([
      z.string(),
      z.array(z.union([
        z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows21$inboundSchema),
        z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows22$inboundSchema),
      ])),
    ]),
    tool_calls: z.array(
      z.lazy(() => GetV2ResourcesDatasetsDatasetIdRowsToolCalls$inboundSchema),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "tool_calls": "toolCalls",
    });
  });

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsMessages$Outbound = {
  role: string;
  content:
    | string
    | Array<
      | GetV2ResourcesDatasetsDatasetIdRows21$Outbound
      | GetV2ResourcesDatasetsDatasetIdRows22$Outbound
    >;
  tool_calls?:
    | Array<GetV2ResourcesDatasetsDatasetIdRowsToolCalls$Outbound>
    | undefined;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsMessages$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsMessages$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsMessages
  > = z.object({
    role: GetV2ResourcesDatasetsDatasetIdRowsRole$outboundSchema,
    content: z.union([
      z.string(),
      z.array(z.union([
        z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows21$outboundSchema),
        z.lazy(() => GetV2ResourcesDatasetsDatasetIdRows22$outboundSchema),
      ])),
    ]),
    toolCalls: z.array(
      z.lazy(() => GetV2ResourcesDatasetsDatasetIdRowsToolCalls$outboundSchema),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      toolCalls: "tool_calls",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsMessages$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsMessages$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsMessages$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsMessages$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsMessages$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsMessages$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsMessages$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsItems$inboundSchema: z.ZodType<
  GetV2ResourcesDatasetsDatasetIdRowsItems,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  messages: z.array(
    z.lazy(() => GetV2ResourcesDatasetsDatasetIdRowsMessages$inboundSchema),
  ),
  expected_output: z.nullable(z.string()).optional(),
  created: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  updated: z.string().datetime({ offset: true }).default(
    "2024-10-22T07:23:04.365Z",
  ).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "expected_output": "expectedOutput",
  });
});

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsItems$Outbound = {
  id: string;
  messages: Array<GetV2ResourcesDatasetsDatasetIdRowsMessages$Outbound>;
  expected_output?: string | null | undefined;
  created?: string | undefined;
  updated: string;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsItems$outboundSchema: z.ZodType<
  GetV2ResourcesDatasetsDatasetIdRowsItems$Outbound,
  z.ZodTypeDef,
  GetV2ResourcesDatasetsDatasetIdRowsItems
> = z.object({
  id: z.string(),
  messages: z.array(
    z.lazy(() => GetV2ResourcesDatasetsDatasetIdRowsMessages$outboundSchema),
  ),
  expectedOutput: z.nullable(z.string()).optional(),
  created: z.date().transform(v => v.toISOString()).optional(),
  updated: z.date().default(() => new Date("2024-10-22T07:23:04.365Z"))
    .transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    expectedOutput: "expected_output",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsItems$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsItems$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsItems$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsItems$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsItems$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsItems$Outbound` instead. */
  export type Outbound = GetV2ResourcesDatasetsDatasetIdRowsItems$Outbound;
}

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsResponseBody$inboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.object({
    count: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    items: z.array(
      z.lazy(() => GetV2ResourcesDatasetsDatasetIdRowsItems$inboundSchema),
    ),
  });

/** @internal */
export type GetV2ResourcesDatasetsDatasetIdRowsResponseBody$Outbound = {
  count: number;
  page: number;
  limit: number;
  totalPages: number;
  items: Array<GetV2ResourcesDatasetsDatasetIdRowsItems$Outbound>;
};

/** @internal */
export const GetV2ResourcesDatasetsDatasetIdRowsResponseBody$outboundSchema:
  z.ZodType<
    GetV2ResourcesDatasetsDatasetIdRowsResponseBody$Outbound,
    z.ZodTypeDef,
    GetV2ResourcesDatasetsDatasetIdRowsResponseBody
  > = z.object({
    count: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
    items: z.array(
      z.lazy(() => GetV2ResourcesDatasetsDatasetIdRowsItems$outboundSchema),
    ),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV2ResourcesDatasetsDatasetIdRowsResponseBody$ {
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsResponseBody$inboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GetV2ResourcesDatasetsDatasetIdRowsResponseBody$outboundSchema;
  /** @deprecated use `GetV2ResourcesDatasetsDatasetIdRowsResponseBody$Outbound` instead. */
  export type Outbound =
    GetV2ResourcesDatasetsDatasetIdRowsResponseBody$Outbound;
}
