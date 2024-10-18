# ResponseBodyUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { ResponseBodyUsage } from "orq-node-client/models/operations";

let value: ResponseBodyUsage = {
  completionTokens: 2703.28,
  promptTokens: 1314.83,
  totalTokens: 553.74,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |