# PostV2RouterRerankResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterRerankResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2RouterRerankResponseBody = {
  results: [
    {
      index: 6996.22,
      relevanceScore: 3277.20,
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_minus_sign:                                         | A unique identifier for the rerank.                        |
| `results`                                                  | [operations.Results](../../models/operations/results.md)[] | :heavy_check_mark:                                         | An ordered list of ranked documents                        |
| `meta`                                                     | [operations.Meta](../../models/operations/meta.md)         | :heavy_minus_sign:                                         | Some information about the response                        |