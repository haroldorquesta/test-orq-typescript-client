# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-poc-typescript/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 5305.37,
      bytes: [
        9221.11,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 894.95,
          bytes: [
            4059.42,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 243.13,
      bytes: [
        3426.11,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6222.31,
          bytes: [
            2790.68,
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `content`                                                                          | [operations.ResponseBodyContent](../../models/operations/responsebodycontent.md)[] | :heavy_check_mark:                                                                 | A list of message content tokens with log probability information.                 |
| `refusal`                                                                          | [operations.Refusal](../../models/operations/refusal.md)[]                         | :heavy_check_mark:                                                                 | A list of message refusal tokens with log probability information.                 |