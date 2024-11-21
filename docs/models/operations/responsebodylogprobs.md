# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-poc-typescript2/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 3726.79,
      bytes: [
        5305.37,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 9221.11,
          bytes: [
            894.95,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 4059.42,
      bytes: [
        243.13,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 3426.11,
          bytes: [
            6222.31,
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