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
      index: 3484.76,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 7400.98,
            bytes: [
              6805.14,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6223.84,
                bytes: [
                  7105.28,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 2049.24,
            bytes: [
              3416.98,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6762.42,
                bytes: [
                  8792.35,
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
        role: "tool",
      },
    },
  ],
  created: 2827.00,
  model: "2",
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