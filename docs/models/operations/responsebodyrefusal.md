# ResponseBodyRefusal

## Example Usage

```typescript
import { ResponseBodyRefusal } from "orq-poc-typescript/models/operations";

let value: ResponseBodyRefusal = {
  token: "<value>",
  logprob: 6041.18,
  bytes: [
    3828.08,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 8953.86,
      bytes: [
        9677.95,
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                                                    | *string*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The token.                                                                                                                                                                                 |
| `logprob`                                                                                                                                                                                  | *number*                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                         | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely.                         |
| `bytes`                                                                                                                                                                                    | *number*[]                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                         | A list of integers representing the UTF-8 bytes representation of the token.                                                                                                               |
| `topLogprobs`                                                                                                                                                                              | [operations.PostV2RouterChatCompletionsResponseBodyRouterChatCompletionsTopLogprobs](../../models/operations/postv2routerchatcompletionsresponsebodyrouterchatcompletionstoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                                         | List of the most likely tokens and their log probability, at this token position.                                                                                                          |