# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-poc-typescript/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 5058.66,
      bytes: [
        3103.81,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 3730.35,
          bytes: [
            5249.70,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 7505.95,
      bytes: [
        3335.07,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 9241.59,
          bytes: [
            8623.19,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                    | [operations.RouterChatCompletionsResponseBodyContent](../../models/operations/routerchatcompletionsresponsebodycontent.md)[] | :heavy_check_mark:                                                                                                           | A list of message content tokens with log probability information.                                                           |
| `refusal`                                                                                                                    | [operations.ResponseBodyRefusal](../../models/operations/responsebodyrefusal.md)[]                                           | :heavy_check_mark:                                                                                                           | A list of message refusal tokens with log probability information.                                                           |