# DeploymentListData

## Example Usage

```typescript
import { DeploymentListData } from "orq-poc-typescript/models/operations";

let value: DeploymentListData = {
  id: "a78ef3a4-0c56-49da-9d4c-2fa3fb438036",
  created: "<value>",
  updated: "<value>",
  key: "<key>",
  description: "until twist oof ack flame turbulent",
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
    model: "Civic",
    modelType: "stt",
    modelParameters: {},
    provider: "anyscale",
    messages: [
      {
        role: "system",
        content: "<value>",
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