# RouterImageGenerationsMessageToolCalls

## Example Usage

```typescript
import { RouterImageGenerationsMessageToolCalls } from "orq-poc-typescript/models/operations";

let value: RouterImageGenerationsMessageToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `index`                                                                                                              | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `type`                                                                                                               | [operations.RouterImageGenerationsMessageType](../../models/operations/routerimagegenerationsmessagetype.md)         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `function`                                                                                                           | [operations.RouterImageGenerationsMessageFunction](../../models/operations/routerimagegenerationsmessagefunction.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |