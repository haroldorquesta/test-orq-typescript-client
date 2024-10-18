# PostV2RouterChatCompletionsResponseBodyUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { PostV2RouterChatCompletionsResponseBodyUsage } from "orq-node-client/models/operations";

let value: PostV2RouterChatCompletionsResponseBodyUsage = {
  completionTokens: 5864.10,
  promptTokens: 639.55,
  totalTokens: 4856.28,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_check_mark:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_check_mark:                                                | Total number of tokens used in the request (prompt + completion). |