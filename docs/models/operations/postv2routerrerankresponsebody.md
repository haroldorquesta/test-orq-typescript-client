# PostV2RouterRerankResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterRerankResponseBody } from "orq-node-client/models/operations";

let value: PostV2RouterRerankResponseBody = {
  results: [
    {
      index: 2327.44,
      relevanceScore: 6144.65,
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