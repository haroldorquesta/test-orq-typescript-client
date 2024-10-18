# PostV2DeploymentsGetConfig2Deployments2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { PostV2DeploymentsGetConfig2Deployments2 } from "orq-node-client/models/operations";

let value: PostV2DeploymentsGetConfig2Deployments2 = {
  type: "image_url",
  imageUrl: {
    url: "https://writhing-brochure.biz/",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [operations.PostV2DeploymentsGetConfig2DeploymentsPublicResponseType](../../models/operations/postv2deploymentsgetconfig2deploymentspublicresponsetype.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `imageUrl`                                                                                                                                                 | [operations.PostV2DeploymentsGetConfig2ImageUrl](../../models/operations/postv2deploymentsgetconfig2imageurl.md)                                           | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |