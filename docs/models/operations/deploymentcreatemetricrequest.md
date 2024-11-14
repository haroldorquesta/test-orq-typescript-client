# DeploymentCreateMetricRequest

## Example Usage

```typescript
import { DeploymentCreateMetricRequest } from "orq-poc-typescript/models/operations";

let value: DeploymentCreateMetricRequest = {
  id: "<id>",
  requestBody: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Deployment ID                                                                                                |
| `requestBody`                                                                                                | [operations.DeploymentCreateMetricRequestBody](../../models/operations/deploymentcreatemetricrequestbody.md) | :heavy_check_mark:                                                                                           | The deployment request payload                                                                               |