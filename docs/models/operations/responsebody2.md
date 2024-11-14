# ResponseBody2

Represents a streamed chunk of a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody2 } from "orq-poc-typescript/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      index: 2827.00,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 302.35,
            bytes: [
              7103.37,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 78.84,
                bytes: [
                  3726.79,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 5305.37,
            bytes: [
              9221.11,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 894.95,
                bytes: [
                  4059.42,
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
        role: "system",
      },
    },
  ],
  created: 3426.11,
  model: "Land Cruiser",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                   | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | A unique identifier for the chat completion.                                                                                                                                           |
| `choices`                                                                                                                                                                              | [operations.RouterChatCompletionsResponseBodyChoices](../../models/operations/routerchatcompletionsresponsebodychoices.md)[]                                                           | :heavy_check_mark:                                                                                                                                                                     | A list of chat completion choices. Can contain more than one elements if n is greater than 1. Can also be empty for the last chunk if you set stream_options: {"include_usage": true}. |
| `created`                                                                                                                                                                              | *number*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The Unix timestamp (in seconds) of when the chat completion was created.                                                                                                               |
| `model`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The model used for the chat completion.                                                                                                                                                |
| `systemFingerprint`                                                                                                                                                                    | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | This fingerprint represents the backend configuration that the model runs with.                                                                                                        |
| `object`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The object type                                                                                                                                                                        |
| `usage`                                                                                                                                                                                | [operations.RouterChatCompletionsResponseBodyUsage](../../models/operations/routerchatcompletionsresponsebodyusage.md)                                                                 | :heavy_check_mark:                                                                                                                                                                     | Usage statistics for the completion request.                                                                                                                                           |