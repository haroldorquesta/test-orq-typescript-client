# PostV2RouterEmbeddingsResponseBody

Embeddings created

## Example Usage

```typescript
import { PostV2RouterEmbeddingsResponseBody } from "orq-node-client/models/operations";

let value: PostV2RouterEmbeddingsResponseBody = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: "<value>",
      index: 4535.43,
    },
  ],
  model: "Model T",
  usage: {
    promptTokens: 8663.82,
    totalTokens: 9755.22,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `object`                                                                                           | [operations.PostV2RouterEmbeddingsObject](../../models/operations/postv2routerembeddingsobject.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `data`                                                                                             | [operations.Data](../../models/operations/data.md)[]                                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `model`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | ID of the model to use                                                                             |
| `usage`                                                                                            | [operations.PostV2RouterEmbeddingsUsage](../../models/operations/postv2routerembeddingsusage.md)   | :heavy_check_mark:                                                                                 | N/A                                                                                                |