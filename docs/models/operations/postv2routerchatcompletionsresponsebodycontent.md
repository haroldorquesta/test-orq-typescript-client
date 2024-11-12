# PostV2RouterChatCompletionsResponseBodyContent

## Example Usage

```typescript
import { PostV2RouterChatCompletionsResponseBodyContent } from "orq-poc-typescript/models/operations";

let value: PostV2RouterChatCompletionsResponseBodyContent = {
  token: "<value>",
  logprob: 4518.22,
  bytes: [
    708.70,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 2927.94,
      bytes: [
        1523.55,
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
| `topLogprobs`                                                                                                                                                      | [operations.PostV2RouterChatCompletionsResponseBodyTopLogprobs](../../models/operations/postv2routerchatcompletionsresponsebodytoplogprobs.md)[]                   | :heavy_check_mark:                                                                                                                                                 | List of the most likely tokens and their log probability, at this token position.                                                                                  |