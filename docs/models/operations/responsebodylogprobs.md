# ResponseBodyLogprobs

Log probability information for the choice.

## Example Usage

```typescript
import { ResponseBodyLogprobs } from "orq-poc-typescript/models/operations";

let value: ResponseBodyLogprobs = {
  content: [
    {
      token: "<value>",
      logprob: 5468.85,
      bytes: [
        2748.24,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 5922.30,
          bytes: [
            8967.61,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 4067.33,
      bytes: [
        5520.78,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 2716.53,
          bytes: [
            4554.44,
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