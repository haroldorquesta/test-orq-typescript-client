# DeploymentGetConfigTools

## Example Usage

```typescript
import { DeploymentGetConfigTools } from "orq-poc-typescript/models/operations";

let value: DeploymentGetConfigTools = {
  type: "function",
  function: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [operations.DeploymentGetConfigDeploymentsResponse200Type](../../models/operations/deploymentgetconfigdeploymentsresponse200type.md) | :heavy_check_mark:                                                                                                                   | The type of the tool. Currently, only `function` is supported.                                                                       |
| `function`                                                                                                                           | [operations.DeploymentGetConfigDeploymentsFunction](../../models/operations/deploymentgetconfigdeploymentsfunction.md)               | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |