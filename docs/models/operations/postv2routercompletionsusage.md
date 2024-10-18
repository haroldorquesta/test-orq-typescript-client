# PostV2RouterCompletionsUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { PostV2RouterCompletionsUsage } from "orq-node-client/models/operations";

let value: PostV2RouterCompletionsUsage = {
  completionTokens: 8490.38,
  promptTokens: 333.05,
  totalTokens: 9589.83,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |