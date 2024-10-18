# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-node-client/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 5654.21,
      bytes: [
        1832.80,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1448.48,
          bytes: [
            4880.56,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 3556.13,
      bytes: [
        9404.32,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 7653.25,
          bytes: [
            7486.64,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                                | [operations.PostV2RouterChatCompletionsResponseBodyContent](../../models/operations/postv2routerchatcompletionsresponsebodycontent.md)[] | :heavy_check_mark:                                                                                                                       | A list of message content tokens with log probability information.                                                                       |
| `refusal`                                                                                                                                | [operations.ResponseBodyRefusal](../../models/operations/responsebodyrefusal.md)[]                                                       | :heavy_check_mark:                                                                                                                       | A list of message refusal tokens with log probability information.                                                                       |