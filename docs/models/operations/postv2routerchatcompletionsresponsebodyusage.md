# PostV2RouterChatCompletionsResponseBodyUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { PostV2RouterChatCompletionsResponseBodyUsage } from "orq-poc-typescript/models/operations";

let value: PostV2RouterChatCompletionsResponseBodyUsage = {
  completionTokens: 2484.13,
  promptTokens: 5058.66,
  totalTokens: 3103.81,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |