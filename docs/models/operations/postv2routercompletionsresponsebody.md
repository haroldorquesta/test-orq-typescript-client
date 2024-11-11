# PostV2RouterCompletionsResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterCompletionsResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2RouterCompletionsResponseBody = {
  id: "<id>",
  choices: [
    {
      finishReason: "stop",
      index: 599.44,
      text: "<value>",
    },
  ],
  created: 610.79,
  model: "Taurus",
  systemFingerprint: "<value>",
  object: "<value>",
  usage: {},
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