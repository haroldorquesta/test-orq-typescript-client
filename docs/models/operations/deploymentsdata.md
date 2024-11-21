# DeploymentsData

## Example Usage

```typescript
import { DeploymentsData } from "orq-poc-typescript2/models/operations";

let value: DeploymentsData = {
  id: "28030c35-eb02-4993-9e98-9b4632fb7340",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "following although trustworthy underplay hippodrome",
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
    model: "Durango",
    modelType: "vision",
    modelParameters: {},
    provider: "replicate",
    messages: [
      {
        role: "tool",
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