# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-poc-typescript/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 2378.07,
      bytes: [
        1718.53,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 4492.92,
          bytes: [
            3044.68,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 8391.89,
      bytes: [
        2377.42,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5023.89,
          bytes: [
            9425.84,
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
| `content`                                                                                                                    | [operations.CreateChatCompletionsResponseBodyContent](../../models/operations/createchatcompletionsresponsebodycontent.md)[] | :heavy_check_mark:                                                                                                           | A list of message content tokens with log probability information.                                                           |
| `refusal`                                                                                                                    | [operations.ResponseBodyRefusal](../../models/operations/responsebodyrefusal.md)[]                                           | :heavy_check_mark:                                                                                                           | A list of message refusal tokens with log probability information.                                                           |