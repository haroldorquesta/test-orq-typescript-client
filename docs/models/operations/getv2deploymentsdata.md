# GetV2DeploymentsData

## Example Usage

```typescript
import { GetV2DeploymentsData } from "orq-poc-typescript/models/operations";

let value: GetV2DeploymentsData = {
  id: "0c569dad-4c2f-4a3f-ab43-80365749d182",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "roundabout embarrassment earth wildly frank now",
  promptConfig: {
    tools: [
      {
        type: "function",
        function: {
          name: "<value>",
          parameters: {
            type: "object",
            properties: {
              "key": "<value>",
            },
          },
        },
      },
    ],
    model: "Fiesta",
    modelType: "tts",
    modelParameters: {},
    provider: "google",
    messages: [
      {
        role: "assistant",
        content: [
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  },
  version: "<value>",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `id`                                                                              | *string*                                                                          | :heavy_check_mark:                                                                | Unique identifier for the object.                                                 |
| `created`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Date in ISO 8601 format at which the object was created.                          |
| `updated`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | Date in ISO 8601 format at which the object was last updated.                     |
| `key`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | The deployment unique key                                                         |
| `description`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | An arbitrary string attached to the object. Often useful for displaying to users. |
| `promptConfig`                                                                    | [operations.PromptConfig](../../models/operations/promptconfig.md)                | :heavy_check_mark:                                                                | N/A                                                                               |
| `version`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | THe version of the deployment                                                     |