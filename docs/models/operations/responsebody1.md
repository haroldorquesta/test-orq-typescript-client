# ResponseBody1

Represents a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody1 } from "orq-poc-typescript/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      index: 2790.68,
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
        role: "assistant",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 1157.03,
            bytes: [
              5771.40,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6952.70,
                bytes: [
                  6719.57,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9488.61,
            bytes: [
              27.03,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6471.97,
                bytes: [
                  6003.92,
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  created: 5887.40,
  model: "Wrangler",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
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