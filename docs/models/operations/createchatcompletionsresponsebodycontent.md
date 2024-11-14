# CreateChatCompletionsResponseBodyContent

## Example Usage

```typescript
import { CreateChatCompletionsResponseBodyContent } from "orq-poc-typescript/models/operations";

let value: CreateChatCompletionsResponseBodyContent = {
  token: "<value>",
  logprob: 9509.53,
  bytes: [
    2334.20,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 6897.68,
      bytes: [
        583.56,
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
| `topLogprobs`                                                                                                                                                      | [operations.CreateChatCompletionsResponseBodyTopLogprobs](../../models/operations/createchatcompletionsresponsebodytoplogprobs.md)[]                               | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |