# PostV2RouterCompletionsResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterCompletionsResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2RouterCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "content_filter",
      index: 3354.98,
      text: "<value>",
    },
  ],
  created: 1476.86,
  model: "A4",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 2419.02,
    promptTokens: 4322.81,
    totalTokens: 5219.96,
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | A unique identifier for the completion.                                                                  |
| `choices`                                                                                                | [operations.PostV2RouterCompletionsChoices](../../models/operations/postv2routercompletionschoices.md)[] | :heavy_check_mark:                                                                                       | The list of completion choices the model generated for the input prompt.                                 |
| `created`                                                                                                | *number*                                                                                                 | :heavy_check_mark:                                                                                       | The Unix timestamp (in seconds) of when the chat completion was created.                                 |
| `model`                                                                                                  | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The model used for the chat completion.                                                                  |
| `systemFingerprint`                                                                                      | *string*                                                                                                 | :heavy_check_mark:                                                                                       | This fingerprint represents the backend configuration that the model runs with.                          |
| `object`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The object type                                                                                          |
| `usage`                                                                                                  | [operations.PostV2RouterCompletionsUsage](../../models/operations/postv2routercompletionsusage.md)       | :heavy_check_mark:                                                                                       | Usage statistics for the completion request.                                                             |