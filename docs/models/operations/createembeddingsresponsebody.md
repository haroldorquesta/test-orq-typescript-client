# CreateEmbeddingsResponseBody

Embeddings created

## Example Usage

```typescript
import { CreateEmbeddingsResponseBody } from "orq-poc-typescript/models/operations";

let value: CreateEmbeddingsResponseBody = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: "<value>",
      index: 4572.23,
    },
  ],
  model: "Wrangler",
  usage: {
    promptTokens: 5757.51,
    totalTokens: 8207.67,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `object`                                                                               | [operations.CreateEmbeddingsObject](../../models/operations/createembeddingsobject.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [operations.CreateEmbeddingsData](../../models/operations/createembeddingsdata.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `model`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | ID of the model to use                                                                 |
| `usage`                                                                                | [operations.CreateEmbeddingsUsage](../../models/operations/createembeddingsusage.md)   | :heavy_check_mark:                                                                     | N/A                                                                                    |