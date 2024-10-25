# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-poc-typescript/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 6222.31,
      bytes: [
        2790.68,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 2097.50,
          bytes: [
            1157.03,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 5771.40,
      bytes: [
        6952.70,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6719.57,
          bytes: [
            9488.61,
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