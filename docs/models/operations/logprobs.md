# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-poc-typescript/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 6719.57,
      bytes: [
        9488.61,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 27.03,
          bytes: [
            6471.97,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 6003.92,
      bytes: [
        5887.40,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 9627.70,
          bytes: [
            168.72,
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