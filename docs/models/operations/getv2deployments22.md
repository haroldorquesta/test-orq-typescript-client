# GetV2Deployments22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetV2Deployments22 } from "orq-poc-typescript/models/operations";

let value: GetV2Deployments22 = {
  type: "image_url",
  imageUrl: {
    url: "https://showy-jungle.biz",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                     | [operations.GetV2Deployments2DeploymentsType](../../models/operations/getv2deployments2deploymentstype.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `imageUrl`                                                                                                 | [operations.GetV2Deployments2ImageUrl](../../models/operations/getv2deployments2imageurl.md)               | :heavy_check_mark:                                                                                         | N/A                                                                                                        |