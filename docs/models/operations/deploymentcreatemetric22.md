# DeploymentCreateMetric22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentCreateMetric22 } from "orq-poc-typescript/models/operations";

let value: DeploymentCreateMetric22 = {
  type: "image_url",
  imageUrl: {
    url: "https://hidden-hubris.org",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                 | [operations.DeploymentCreateMetric2DeploymentsType](../../models/operations/deploymentcreatemetric2deploymentstype.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `imageUrl`                                                                                                             | [operations.DeploymentCreateMetric2ImageUrl](../../models/operations/deploymentcreatemetric2imageurl.md)               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |