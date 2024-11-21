# RouterEmbeddingResponseBody

Embeddings created

## Example Usage

```typescript
import { RouterEmbeddingResponseBody } from "orq-poc-typescript2/models/operations";

let value: RouterEmbeddingResponseBody = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: [
        8149.66,
      ],
      index: 9854.91,
    },
  ],
  model: "XC90",
  usage: {
    promptTokens: 9049.48,
    totalTokens: 2965.56,
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `object`                                                                             | [operations.RouterEmbeddingObject](../../models/operations/routerembeddingobject.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `data`                                                                               | [operations.RouterEmbeddingData](../../models/operations/routerembeddingdata.md)[]   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `model`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the model to use                                                               |
| `usage`                                                                              | [operations.RouterEmbeddingUsage](../../models/operations/routerembeddingusage.md)   | :heavy_check_mark:                                                                   | N/A                                                                                  |