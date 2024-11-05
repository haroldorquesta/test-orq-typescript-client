# ResponseBody1

Represents a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody1 } from "orq-poc-typescript/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 6964.82,
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
        role: "correction",
      },
      logprobs: {
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
      },
    },
  ],
  created: 2277.60,
  model: "Element",
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