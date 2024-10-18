# ResponseBody1

Represents a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody1 } from "orq-node-client/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "length",
      index: 2621.18,
      message: {
        content: "<value>",
        refusal: "<value>",
        toolCalls: [
          {
            id: "<id>",
            type: "function",
            function: {
              name: "<value>",
              arguments: "<value>",
            },
          },
        ],
        role: "exception",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 6832.81,
            bytes: [
              6956.25,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 2835.19,
                bytes: [
                  3799.27,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 1811.51,
            bytes: [
              7885.46,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 568.48,
                bytes: [
                  6969.97,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 7786.95,
  model: "Mustang",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 2594.23,
    promptTokens: 3738.13,
    totalTokens: 5876.00,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | A unique identifier for the chat completion.                                       |
| `choices`                                                                          | [operations.ResponseBodyChoices](../../models/operations/responsebodychoices.md)[] | :heavy_check_mark:                                                                 | A list of chat completion choices. Can be more than one if n is greater than 1.    |
| `created`                                                                          | *number*                                                                           | :heavy_check_mark:                                                                 | The Unix timestamp (in seconds) of when the chat completion was created.           |
| `model`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | The model used for the chat completion.                                            |
| `systemFingerprint`                                                                | *string*                                                                           | :heavy_check_mark:                                                                 | This fingerprint represents the backend configuration that the model runs with.    |
| `object`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | The object type                                                                    |
| `usage`                                                                            | [operations.ResponseBodyUsage](../../models/operations/responsebodyusage.md)       | :heavy_check_mark:                                                                 | Usage statistics for the completion request.                                       |