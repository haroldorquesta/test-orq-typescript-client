# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-poc-typescript/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 9679.66,
      bytes: [
        9944.01,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 4518.22,
          bytes: [
            708.70,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 2927.94,
      bytes: [
        1523.55,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 4174.86,
          bytes: [
            1312.89,
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