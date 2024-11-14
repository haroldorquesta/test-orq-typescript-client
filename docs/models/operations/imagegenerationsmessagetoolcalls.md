# ImageGenerationsMessageToolCalls

## Example Usage

```typescript
import { ImageGenerationsMessageToolCalls } from "orq-poc-typescript/models/operations";

let value: ImageGenerationsMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `index`                                                                                                  | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `type`                                                                                                   | [operations.ImageGenerationsMessageType](../../models/operations/imagegenerationsmessagetype.md)         | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `function`                                                                                               | [operations.ImageGenerationsMessageFunction](../../models/operations/imagegenerationsmessagefunction.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |