# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-poc-typescript/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
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
    },
  ],
  refusal: [
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
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                                | [operations.PostV2RouterChatCompletionsResponseBodyContent](../../models/operations/postv2routerchatcompletionsresponsebodycontent.md)[] | :heavy_check_mark:                                                                                                                       | A list of message content tokens with log probability information.                                                                       |
| `refusal`                                                                                                                                | [operations.ResponseBodyRefusal](../../models/operations/responsebodyrefusal.md)[]                                                       | :heavy_check_mark:                                                                                                                       | A list of message refusal tokens with log probability information.                                                                       |