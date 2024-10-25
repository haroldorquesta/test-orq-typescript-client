# PostV2RouterCompletionsUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { PostV2RouterCompletionsUsage } from "orq-poc-typescript/models/operations";

let value: PostV2RouterCompletionsUsage = {
  completionTokens: 9762.26,
  promptTokens: 8897.94,
  totalTokens: 7645.62,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |