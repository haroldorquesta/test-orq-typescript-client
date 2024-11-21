# RouterRerankResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { RouterRerankResponseBody } from "orq-poc-typescript2/models/operations";

let value: RouterRerankResponseBody = {
  results: [
    {
      index: 5173.09,
      relevanceScore: 4240.89,
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