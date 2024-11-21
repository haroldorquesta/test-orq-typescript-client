# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-poc-typescript2/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 9521.43,
      bytes: [
        3000.29,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1604.68,
          bytes: [
            8863.05,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 4463.94,
      bytes: [
        9078.76,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 1602.30,
          bytes: [
            6611.18,
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