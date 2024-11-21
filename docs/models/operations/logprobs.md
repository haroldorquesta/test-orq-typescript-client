# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-poc-typescript/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 5098.07,
      bytes: [
        3339.65,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 7908.40,
          bytes: [
            972.43,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 4420.36,
      bytes: [
        5199.52,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 6939.56,
          bytes: [
            908.86,
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