# RouterChatCompletionsResponseBodyContent

## Example Usage

```typescript
import { RouterChatCompletionsResponseBodyContent } from "orq-poc-typescript/models/operations";

let value: RouterChatCompletionsResponseBodyContent = {
  token: "<value>",
  logprob: 5468.85,
  bytes: [
    2748.24,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 5922.30,
      bytes: [
        8967.61,
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                            | *string*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The token.                                                                                                                                                         |
| `logprob`                                                                                                                                                          | *number*                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                 | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely. |
| `bytes`                                                                                                                                                            | *number*[]                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                 | A list of integers representing the UTF-8 bytes representation of the token.                                                                                       |
| `topLogprobs`                                                                                                                                                      | [operations.RouterChatCompletionsResponseBodyTopLogprobs](../../models/operations/routerchatcompletionsresponsebodytoplogprobs.md)[]                               | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |