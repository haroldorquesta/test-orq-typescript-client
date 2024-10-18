# PostV2RouterCompletionsResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterCompletionsResponseBody } from "orq-node-client/models/operations";

let value: PostV2RouterCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "length",
      index: 3567.07,
      text: "<value>",
    },
  ],
  created: 163.29,
  model: "CTS",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {
    completionTokens: 4012.60,
    promptTokens: 9292.91,
    totalTokens: 996.15,
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