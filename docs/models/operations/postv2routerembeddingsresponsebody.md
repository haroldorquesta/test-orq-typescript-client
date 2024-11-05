# PostV2RouterEmbeddingsResponseBody

Embeddings created

## Example Usage

```typescript
import { PostV2RouterEmbeddingsResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2RouterEmbeddingsResponseBody = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: "<value>",
      index: 3984.34,
    },
  ],
  model: "A4",
  usage: {
    promptTokens: 4240.32,
    totalTokens: 2586.84,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `object`                                                                                           | [operations.PostV2RouterEmbeddingsObject](../../models/operations/postv2routerembeddingsobject.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [operations.PostV2RouterEmbeddingsData](../../models/operations/postv2routerembeddingsdata.md)[]   | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the model to use                                                                             |
| `usage`                                                                                            | [operations.PostV2RouterEmbeddingsUsage](../../models/operations/postv2routerembeddingsusage.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |