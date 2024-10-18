# ResponseBody2

Represents a streamed chunk of a chat completion response returned by model, based on the provided input.

## Example Usage

```typescript
import { ResponseBody2 } from "orq-node-client/models/operations";

let value: ResponseBody2 = {
  id: "<id>",
  choices: [
    {
      finishReason: "tool_calls",
      index: 8765.05,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 3381.59,
            bytes: [
              9615.70,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 2317.02,
                bytes: [
                  9493.19,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 9413.78,
            bytes: [
              7992.03,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 6304.48,
                bytes: [
                  8742.88,
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
  created: 8489.44,
  model: "Land Cruiser",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 132.37,
    promptTokens: 3472.34,
    totalTokens: 1481.41,
  },
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