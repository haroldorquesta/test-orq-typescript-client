# Deployments22

The image part of the prompt message. Only supported with vision models.

## Example Usage

```typescript
import { Deployments22 } from "orq-poc-typescript/models/components";

let value: Deployments22 = {
  type: "image_url",
  imageUrl: {
    url: "https://dreary-scorpion.biz",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                   | [components.Deployments2MessagesContentType](../../models/components/deployments2messagescontenttype.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `imageUrl`                                                                                               | [components.TwoImageUrl](../../models/components/twoimageurl.md)                                         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |