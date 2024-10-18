# ToolCalls

## Example Usage

```typescript
import { ToolCalls } from "orq-node-client/models/operations";

let value: ToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `index`                                                                                                | *number*                                                                                               | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | [operations.PostV2DeploymentsGetConfigType](../../models/operations/postv2deploymentsgetconfigtype.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `function`                                                                                             | [operations.FunctionT](../../models/operations/functiont.md)                                           | :heavy_check_mark:                                                                                     | N/A                                                                                                    |