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
      index: 3828.08,
      logprobs: {
        content: [
          {
            token: "<value>",
            logprob: 8953.86,
            bytes: [
              9677.95,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 5468.85,
                bytes: [
                  2748.24,
                ],
              },
            ],
          },
        ],
        refusal: [
          {
            token: "<value>",
            logprob: 5922.30,
            bytes: [
              8967.61,
            ],
            topLogprobs: [
              {
                token: "<value>",
                logprob: 4067.33,
                bytes: [
                  5520.78,
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
  created: 4554.44,
  model: "Element",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
};
```

## Fields

| Field                                                                                                                                                                                  | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                   | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | A unique identifier for the chat completion.                                                                                                                                           |
| `choices`                                                                                                                                                                              | [operations.CreateChatCompletionsResponseBodyChoices](../../models/operations/createchatcompletionsresponsebodychoices.md)[]                                                           | :heavy_check_mark:                                                                                                                                                                     | A list of chat completion choices. Can contain more than one elements if n is greater than 1. Can also be empty for the last chunk if you set stream_options: {"include_usage": true}. |
| `created`                                                                                                                                                                              | *number*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The Unix timestamp (in seconds) of when the chat completion was created.                                                                                                               |
| `model`                                                                                                                                                                                | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The model used for the chat completion.                                                                                                                                                |
| `systemFingerprint`                                                                                                                                                                    | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | This fingerprint represents the backend configuration that the model runs with.                                                                                                        |
| `object`                                                                                                                                                                               | *string*                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                     | The object type                                                                                                                                                                        |
| `usage`                                                                                                                                                                                | [operations.CreateChatCompletionsResponseBodyUsage](../../models/operations/createchatcompletionsresponsebodyusage.md)                                                                 | :heavy_check_mark:                                                                                                                                                                     | Usage statistics for the completion request.                                                                                                                                           |