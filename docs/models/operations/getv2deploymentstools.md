# GetV2DeploymentsTools

## Example Usage

```typescript
import { GetV2DeploymentsTools } from "orq-poc-typescript/models/operations";

let value: GetV2DeploymentsTools = {
  type: "function",
  function: {
    name: "<value>",
    parameters: {
      type: "object",
      properties: {
        "key": "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `type`                                                                                     | [operations.GetV2DeploymentsType](../../models/operations/getv2deploymentstype.md)         | :heavy_check_mark:                                                                         | The type of the tool. Currently, only `function` is supported.                             |
| `function`                                                                                 | [operations.GetV2DeploymentsFunction](../../models/operations/getv2deploymentsfunction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *number*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |