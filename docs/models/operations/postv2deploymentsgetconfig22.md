# PostV2DeploymentsGetConfig22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { PostV2DeploymentsGetConfig22 } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsGetConfig22 = {
  type: "image_url",
  imageUrl: {
    url: "https://favorable-sand.info/",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                         | [operations.PostV2DeploymentsGetConfig2DeploymentsType](../../models/operations/postv2deploymentsgetconfig2deploymentstype.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `imageUrl`                                                                                                                     | [operations.TwoImageUrl](../../models/operations/twoimageurl.md)                                                               | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |