# PostV2RouterImagesGenerationsMessageToolCalls

## Example Usage

```typescript
import { PostV2RouterImagesGenerationsMessageToolCalls } from "orq-node-client/models/operations";

let value: PostV2RouterImagesGenerationsMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `index`                                                                                                                            | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `type`                                                                                                                             | [operations.PostV2RouterImagesGenerationsMessageType](../../models/operations/postv2routerimagesgenerationsmessagetype.md)         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `function`                                                                                                                         | [operations.PostV2RouterImagesGenerationsMessageFunction](../../models/operations/postv2routerimagesgenerationsmessagefunction.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |