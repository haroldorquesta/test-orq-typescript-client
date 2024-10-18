# GetV2ResourcesDatasets22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { GetV2ResourcesDatasets22 } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasets22 = {
  type: "image_url",
  imageUrl: {
    url: "https://portly-dwell.biz/",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                             | [operations.GetV2ResourcesDatasets2ResourcesType](../../models/operations/getv2resourcesdatasets2resourcestype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `imageUrl`                                                                                                         | [operations.GetV2ResourcesDatasets2ImageUrl](../../models/operations/getv2resourcesdatasets2imageurl.md)           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |