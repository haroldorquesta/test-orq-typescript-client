# DeploymentList22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentList22 } from "orq-poc-typescript/models/operations";

let value: DeploymentList22 = {
  type: "image_url",
  imageUrl: {
    url: "https://overcooked-ravioli.biz",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | [operations.DeploymentList2DeploymentsType](../../models/operations/deploymentlist2deploymentstype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `imageUrl`                                                                                             | [operations.DeploymentList2ImageUrl](../../models/operations/deploymentlist2imageurl.md)               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |