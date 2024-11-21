# RouterCompletionsUsage

Usage statistics for the completion request.

## Example Usage

```typescript
import { RouterCompletionsUsage } from "orq-poc-typescript/models/operations";

let value: RouterCompletionsUsage = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `completionTokens`                                                | *number*                                                          | :heavy_minus_sign:                                                | Number of tokens in the generated completion.                     |
| `promptTokens`                                                    | *number*                                                          | :heavy_minus_sign:                                                | Number of tokens in the prompt.                                   |
| `totalTokens`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Total number of tokens used in the request (prompt + completion). |