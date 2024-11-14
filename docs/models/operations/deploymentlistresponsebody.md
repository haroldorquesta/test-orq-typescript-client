# DeploymentListResponseBody

List of deployments

## Example Usage

```typescript
import { DeploymentListResponseBody } from "orq-poc-typescript/models/operations";

let value: DeploymentListResponseBody = {
  object: "list",
  data: [
    {
      id: "2f77a52d-3831-4dff-8ec5-16320b0c211a",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "ethyl covenant jaggedly where appropriate jubilantly",
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
        model: "Wrangler",
        modelType: "completion",
        modelParameters: {},
        provider: "leonardoai",
        messages: [
          {
            role: "tool",
            content: "<value>",
          },
        ],
      },
      version: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `object`                                                                           | [operations.DeploymentListObject](../../models/operations/deploymentlistobject.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `data`                                                                             | [operations.DeploymentListData](../../models/operations/deploymentlistdata.md)[]   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `hasMore`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |