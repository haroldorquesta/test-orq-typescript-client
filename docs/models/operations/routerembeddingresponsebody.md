# RouterEmbeddingResponseBody

Embeddings created

## Example Usage

```typescript
import { RouterEmbeddingResponseBody } from "orq-poc-typescript/models/operations";

let value: RouterEmbeddingResponseBody = {
  object: "list",
  data: [
    {
      object: "embedding",
      embedding: "<value>",
      index: 9742.56,
    },
  ],
  model: "XTS",
  usage: {
    promptTokens: 4090.54,
    totalTokens: 1629.54,
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