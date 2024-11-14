# ResponseBody1

Represents a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody1 } from "orq-poc-typescript/models/operations";

let value: ResponseBody1 = {
  id: "<id>",
  choices: [
    {
      finishReason: "tool_calls",
      index: 8298.97,
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
        role: "expected_output",
      },
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 9197.83,
            bytes: [
              360.34,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 1747.72,
                bytes: [
                  3891.35,
                ],
              },
            ],
          },
        ],
        refusal: [
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
      },
    },
  ],
  created: 4463.94,
  model: "Taurus",
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