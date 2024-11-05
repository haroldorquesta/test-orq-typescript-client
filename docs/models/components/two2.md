# Two2

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { Two2 } from "orq-poc-typescript/models/components";

let value: Two2 = {
  type: "image_url",
  imageUrl: {
    url: "https://right-peony.org/",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | [components.TwoType](../../models/components/twotype.md)   | :heavy_check_mark:                                         | N/A                                                        |
| `imageUrl`                                                 | [components.ImageUrl](../../models/components/imageurl.md) | :heavy_check_mark:                                         | N/A                                                        |