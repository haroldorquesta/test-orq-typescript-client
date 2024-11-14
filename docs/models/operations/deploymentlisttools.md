# DeploymentListTools

## Example Usage

```typescript
import { DeploymentListTools } from "orq-poc-typescript/models/operations";

let value: DeploymentListTools = {
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [operations.DeploymentListType](../../models/operations/deploymentlisttype.md)         | :heavy_check_mark:                                                                     | The type of the tool. Currently, only `function` is supported.                         |
| `function`                                                                             | [operations.DeploymentListFunction](../../models/operations/deploymentlistfunction.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `id`                                                                                   | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |