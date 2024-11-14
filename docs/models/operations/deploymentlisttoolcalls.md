# DeploymentListToolCalls

## Example Usage

```typescript
import { DeploymentListToolCalls } from "orq-poc-typescript/models/operations";

let value: DeploymentListToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `index`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | [operations.DeploymentListDeploymentsType](../../models/operations/deploymentlistdeploymentstype.md)         | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `function`                                                                                                   | [operations.DeploymentListDeploymentsFunction](../../models/operations/deploymentlistdeploymentsfunction.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |