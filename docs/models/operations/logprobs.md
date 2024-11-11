# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-poc-typescript/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 4461.36,
      bytes: [
        1046.28,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 3484.76,
          bytes: [
            7400.98,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 6805.14,
      bytes: [
        6223.84,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 7105.28,
          bytes: [
            2049.24,
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