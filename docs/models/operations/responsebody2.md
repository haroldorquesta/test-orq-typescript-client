# ResponseBody2

Represents a streamed chunk of a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody2 } from "orq-poc-typescript/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 5058.66,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 3103.81,
            bytes: [
              3730.35,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5249.70,
                bytes: [
                  7505.95,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 3335.07,
            bytes: [
              9241.59,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 8623.19,
                bytes: [
                  486.90,
                ],
              },
            ],
          },
        ],
      },
      delta: {
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
        role: "user",
      },
    },
  ],
  created: 4461.36,
  model: "Accord",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                   | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | A unique identifier for the chat completion.                                                                                                                                           |
| `choices`                                                                                                                                                                              | [operations.PostV2RouterChatCompletionsResponseBodyChoices](../../models/operations/postv2routerchatcompletionsresponsebodychoices.md)[]                                               | :heavy_check_mark:                                                                                                                                                                     | A list of chat completion choices. Can contain more than one elements if n is greater than 1. Can also be empty for the last chunk if you set stream_options: {"include_usage": true}. |
| `created`                                                                                                                                                                              | *number*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The Unix timestamp (in seconds) of when the chat completion was created.                                                                                                               |
| `model`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The model used for the chat completion.                                                                                                                                                |
| `systemFingerprint`                                                                                                                                                                    | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | This fingerprint represents the backend configuration that the model runs with.                                                                                                        |
| `object`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The object type                                                                                                                                                                        |
| `usage`                                                                                                                                                                                | [operations.PostV2RouterChatCompletionsResponseBodyUsage](../../models/operations/postv2routerchatcompletionsresponsebodyusage.md)                                                     | :heavy_check_mark:                                                                                                                                                                     | Usage statistics for the completion request.                                                                                                                                           |