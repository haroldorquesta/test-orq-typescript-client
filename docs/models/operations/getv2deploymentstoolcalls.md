# GetV2DeploymentsToolCalls

## Example Usage

```typescript
import { GetV2DeploymentsToolCalls } from "orq-poc-typescript/models/operations";

let value: GetV2DeploymentsToolCalls = {
  type: "function",
  function: {
    name: "<value>",
    arguments: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `index`                                                                                                          | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `type`                                                                                                           | [operations.GetV2DeploymentsDeploymentsType](../../models/operations/getv2deploymentsdeploymentstype.md)         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `function`                                                                                                       | [operations.GetV2DeploymentsDeploymentsFunction](../../models/operations/getv2deploymentsdeploymentsfunction.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |