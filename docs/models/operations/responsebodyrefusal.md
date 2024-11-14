# ResponseBodyRefusal

## Example Usage

```typescript
import { ResponseBodyRefusal } from "orq-poc-typescript/models/operations";

let value: ResponseBodyRefusal = {
  token: "<value>",
  logprob: 2724.37,
  bytes: [
    3790.57,
  ],
  topLogprobs: [
    {
      token: "<value>",
      logprob: 3742.96,
      bytes: [
        7487.88,
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The token.                                                                                                                                                                     |
| `logprob`                                                                                                                                                                      | *number*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The log probability of this token, if it is within the top 20 most likely tokens. Otherwise, the value -9999.0 is used to signify that the token is very unlikely.             |
| `bytes`                                                                                                                                                                        | *number*[]                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | A list of integers representing the UTF-8 bytes representation of the token.                                                                                                   |
| `topLogprobs`                                                                                                                                                                  | [operations.CreateChatCompletionsResponseBodyRouterChatCompletionsTopLogprobs](../../models/operations/createchatcompletionsresponsebodyrouterchatcompletionstoplogprobs.md)[] | :heavy_check_mark:                                                                                                                                                             | List of the most likely tokens and their log probability, at this token position.                                                                                              |