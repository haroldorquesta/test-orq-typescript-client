# ResponseBodyUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { ResponseBodyUsage } from "orq-poc-typescript/models/operations";

let value: ResponseBodyUsage = {
  completionTokens: 972.43,
  promptTokens: 4420.36,
  totalTokens: 5199.52,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |