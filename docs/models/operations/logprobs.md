# Logprobs

Log probability information for the choice.

## Example Usage

```typescript
import { Logprobs } from "orq-node-client/models/operations";

let value: Logprobs = {
  content: [
    {
      token: "<value>",
      logprob: 7740.47,
      bytes: [
        3331.45,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 811.01,
          bytes: [
            4072.41,
          ],
        },
      ],
    },
  ],
  refusal: [
    {
      token: "<value>",
      logprob: 2322.34,
      bytes: [
        1324.88,
      ],
      topLogprobs: [
        {
          token: "<value>",
          logprob: 534.27,
          bytes: [
            7255.94,
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