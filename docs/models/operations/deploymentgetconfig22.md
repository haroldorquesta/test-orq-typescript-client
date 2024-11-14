# DeploymentGetConfig22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { DeploymentGetConfig22 } from "orq-poc-typescript/models/operations";

let value: DeploymentGetConfig22 = {
  type: "image_url",
  imageUrl: {
    url: "https://favorable-sand.info/",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                           | [operations.DeploymentGetConfig2DeploymentsType](../../models/operations/deploymentgetconfig2deploymentstype.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `imageUrl`                                                                                                       | [operations.TwoImageUrl](../../models/operations/twoimageurl.md)                                                 | :heavy_check_mark:                                                                                               | N/A                                                                                                              |