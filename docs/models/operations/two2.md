# Two2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { Two2 } from "orq-node-client/models/operations";

let value: Two2 = {
  type: "image_url",
  imageUrl: {
    url: "https://ideal-scratch.name",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | [operations.TwoType](../../models/operations/twotype.md)   | :heavy_check_mark:                                         | N/A                                                        |
| `imageUrl`                                                 | [operations.ImageUrl](../../models/operations/imageurl.md) | :heavy_check_mark:                                         | N/A                                                        |